// Get player ID from URL
function getPlayerId() {
    const urlParams = new URLSearchParams(window.location.search);
    const playerId = urlParams.get('player') || sessionStorage.getItem('viewedPlayer') || 'james-mitchell';
    return playerId;
}

// Load player profile data
function loadPlayerProfile() {
    const playerId = getPlayerId();
    const player = playersData[playerId];

    if (!player) {
        document.getElementById('profile-header').innerHTML = '<div class="p-8 text-center text-red-600">Player not found</div>';
        return;
    }

    // Update page title
    document.title = player.name + ' - Player Profile | Scylla';

    // Load header
    loadProfileHeader(player);
    
    // Load quick stats
    loadQuickStats(player);
    
    // Load tab contents
    loadOverviewTab(player);
    loadPerformanceTab(player);
    loadVideosTab(player);
    loadPhotosTab(player);
    loadReviewsTab(player);
}

// Load Profile Header
function loadProfileHeader(player) {
    const initials = player.name.split(' ').map(n => n[0]).join('');
    
    document.getElementById('player-avatar').textContent = initials;
    document.getElementById('player-name').textContent = player.name;
    document.getElementById('player-age').textContent = player.age;
    document.getElementById('player-location').textContent = player.location.split(',')[0];
    document.getElementById('player-role').textContent = player.role;
    document.getElementById('player-rating').textContent = player.rating;
    
    // Skills
    const skillsHTML = player.skills.map(skill => 
        `<span class="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">${skill}</span>`
    ).join('');
    document.getElementById('player-skills').innerHTML = skillsHTML;
}

// Load Quick Stats
function loadQuickStats(player) {
    const statsHTML = Object.entries(player.quickStats).map(([key, value]) => `
        <div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div class="text-4xl font-black text-cricket-green mb-2">${value}</div>
            <div class="text-sm text-gray-600 uppercase font-medium">${key}</div>
        </div>
    `).join('');
    
    document.getElementById('quick-stats').innerHTML = statsHTML;
}

// Load Overview Tab
function loadOverviewTab(player) {
    const achievementsHTML = player.achievements.map(ach => 
        `<li class="flex items-start">
            <i class="fas fa-trophy text-cricket-gold mr-3 mt-1"></i>
            <span class="text-gray-700">${ach}</span>
        </li>`
    ).join('');
    
    document.getElementById('overview-content').innerHTML = `
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Left Column -->
            <div class="space-y-6">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">About</h3>
                    <p class="text-gray-600 leading-relaxed">${player.bio}</p>
                </div>
                
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Achievements</h3>
                    <ul class="space-y-3">${achievementsHTML}</ul>
                </div>
                
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Current Form</h3>
                    <span class="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full text-lg font-bold">
                        <i class="fas fa-chart-line mr-2"></i>${player.form}
                    </span>
                </div>
            </div>
            
            <!-- Right Column -->
            <div class="space-y-6">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Bio Details</h3>
                    <div class="space-y-4">
                        <div class="p-4 bg-gray-50 rounded-lg">
                            <h4 class="font-semibold text-gray-900 mb-2">Cricket Journey</h4>
                            <p class="text-gray-600 text-sm">${player.bioSections.journey}</p>
                        </div>
                        
                        <div class="p-4 bg-gray-50 rounded-lg">
                            <h4 class="font-semibold text-gray-900 mb-2">Key Strengths</h4>
                            <p class="text-gray-600 text-sm">${player.bioSections.strengths}</p>
                        </div>
                        
                        <div class="p-4 bg-gray-50 rounded-lg">
                            <h4 class="font-semibold text-gray-900 mb-2">Career Goals</h4>
                            <p class="text-gray-600 text-sm">${player.bioSections.goals}</p>
                        </div>
                        
                        <div class="p-4 bg-gray-50 rounded-lg">
                            <h4 class="font-semibold text-gray-900 mb-2">Training Regime</h4>
                            <p class="text-gray-600 text-sm">${player.bioSections.training}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Load Performance Tab
function loadPerformanceTab(player) {
    // Create charts
    let chartHTML = '';
    
    // Bar Chart for Batting Stats
    if (player.batting) {
        chartHTML += `
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Batting Statistics</h3>
                <div class="chart-container">
                    <canvas id="battingChart"></canvas>
                </div>
            </div>
        `;
    }
    
    // Bowling Chart if player bowls
    if (player.bowling) {
        chartHTML += `
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Bowling Statistics</h3>
                <div class="chart-container">
                    <canvas id="bowlingChart"></canvas>
                </div>
            </div>
        `;
    }
    
    // Season Performance Chart
    if (player.seasonStats && player.seasonStats.length > 0) {
        chartHTML += `
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Season-wise Performance</h3>
                <div class="chart-container">
                    <canvas id="seasonChart"></canvas>
                </div>
            </div>
        `;
    }
    
    document.getElementById('performance-content').innerHTML = `
        ${chartHTML}
        
        <!-- Detailed Stats Tables -->
        <div class="grid md:grid-cols-2 gap-8">
            ${player.batting ? `
            <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Detailed Batting Stats</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                        <tbody class="divide-y divide-gray-200">
                            ${Object.entries(player.batting).map(([key, value]) => `
                                <tr class="hover:bg-gray-50">
                                    <td class="px-4 py-3 text-sm text-gray-600 font-medium">${formatKey(key)}</td>
                                    <td class="px-4 py-3 text-sm font-bold text-gray-900">${value}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            ` : ''}
            
            ${player.bowling ? `
            <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Detailed Bowling Stats</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                        <tbody class="divide-y divide-gray-200">
                            ${Object.entries(player.bowling).map(([key, value]) => `
                                <tr class="hover:bg-gray-50">
                                    <td class="px-4 py-3 text-sm text-gray-600 font-medium">${formatKey(key)}</td>
                                    <td class="px-4 py-3 text-sm font-bold text-gray-900">${value}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            ` : ''}
        </div>
        
        ${player.fielding ? `
        <div class="mt-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Fielding Statistics</h3>
            <div class="grid grid-cols-4 gap-4">
                ${Object.entries(player.fielding).map(([key, value]) => `
                    <div class="bg-gradient-to-br from-cricket-blue to-blue-600 text-white p-6 rounded-xl text-center shadow-lg">
                        <div class="text-4xl font-black mb-2">${value}</div>
                        <div class="text-sm uppercase">${formatKey(key)}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
        
        ${player.recentMatches ? `
        <div class="mt-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Recent Match Performance</h3>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Opponent</th>
                            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Runs</th>
                            ${player.bowling ? '<th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Wickets</th>' : ''}
                            ${player.fielding.stumpings > 0 ? '<th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Dismissals</th>' : ''}
                            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Result</th>
                            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        ${player.recentMatches.map(match => `
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-3 text-sm font-medium text-gray-900">${match.opponent}</td>
                                <td class="px-4 py-3 text-sm text-cricket-green font-bold">${match.runs}</td>
                                ${player.bowling ? `<td class="px-4 py-3 text-sm text-cricket-green font-bold">${match.wickets || '-'}</td>` : ''}
                                ${player.fielding.stumpings > 0 ? `<td class="px-4 py-3 text-sm text-cricket-green font-bold">${match.dismissals || '-'}</td>` : ''}
                                <td class="px-4 py-3 text-sm">
                                    <span class="px-3 py-1 rounded-full text-xs font-semibold ${match.result === 'Win' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                                        ${match.result}
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm text-gray-600">${match.date}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
        ` : ''}
    `;
    
    // Initialize charts after HTML is loaded
    setTimeout(() => {
        initCharts(player);
    }, 100);
}

// Initialize Charts
function initCharts(player) {
    // Batting Chart
    if (player.batting && document.getElementById('battingChart')) {
        const ctx1 = document.getElementById('battingChart').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['Runs', 'Average', 'Strike Rate', 'Centuries', '50s'],
                datasets: [{
                    label: player.name,
                    data: [player.batting.runs, player.batting.average, player.batting.strikeRate, player.batting.centuries, player.batting.halfCenturies],
                    backgroundColor: [
                        'rgba(45, 80, 22, 0.8)',
                        'rgba(45, 80, 22, 0.8)',
                        'rgba(212, 175, 55, 0.8)',
                        'rgba(212, 175, 55, 0.8)',
                        'rgba(212, 175, 55, 0.8)'
                    ],
                    borderColor: [
                        'rgb(45, 80, 22)',
                        'rgb(45, 80, 22)',
                        'rgb(212, 175, 55)',
                        'rgb(212, 175, 55)',
                        'rgb(212, 175, 55)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Bowling Chart
    if (player.bowling && document.getElementById('bowlingChart')) {
        const ctx2 = document.getElementById('bowlingChart').getContext('2d');
        new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['Wickets', 'Average', 'Economy', 'Strike Rate', '5-wkt hauls'],
                datasets: [{
                    label: player.name,
                    data: [player.bowling.wickets, player.bowling.average, player.bowling.economy, player.bowling.strikeRate, player.bowling.fiveWickets],
                    backgroundColor: [
                        'rgba(30, 64, 175, 0.8)',
                        'rgba(30, 64, 175, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.8)'
                    ],
                    borderColor: [
                        'rgb(30, 64, 175)',
                        'rgb(30, 64, 175)',
                        'rgb(124, 58, 237)',
                        'rgb(124, 58, 237)',
                        'rgb(124, 58, 237)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Season Chart
    if (player.seasonStats && player.seasonStats.length > 0 && document.getElementById('seasonChart')) {
        const ctx3 = document.getElementById('seasonChart').getContext('2d');
        const seasons = player.seasonStats.map(s => s.season);
        const runs = player.seasonStats.map(s => s.runs || 0);
        const wickets = player.seasonStats.map(s => s.wickets || 0);
        
        new Chart(ctx3, {
            type: 'line',
            data: {
                labels: seasons,
                datasets: [
                    {
                        label: 'Runs',
                        data: runs,
                        borderColor: 'rgb(45, 80, 22)',
                        backgroundColor: 'rgba(45, 80, 22, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'Wickets',
                        data: wickets,
                        borderColor: 'rgb(30, 64, 175)',
                        backgroundColor: 'rgba(30, 64, 175, 0.1)',
                        tension: 0.3,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// Load Videos Tab
function loadVideosTab(player) {
    if (!player.videos || player.videos.length === 0) {
        document.getElementById('videos-content').innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-video text-gray-300 text-6xl mb-4"></i>
                <p class="text-gray-500 text-lg">No videos available at the moment</p>
            </div>
        `;
        return;
    }
    
    const videosHTML = player.videos.map((video, index) => `
        <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="relative">
                <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group cursor-pointer" onclick="openVideo('${video.embedId}')">
                    <i class="fas fa-play-circle text-white text-6xl group-hover:scale-110 transition-transform"></i>
                </div>
            </div>
            <div class="p-4">
                <h4 class="font-semibold text-gray-900 mb-2">${video.title}</h4>
                <button onclick="openVideo('${video.embedId}')" class="text-cricket-green hover:text-cricket-blue font-medium text-sm">
                    <i class="fas fa-play mr-2"></i>Watch Video
                </button>
            </div>
        </div>
    `).join('');
    
    document.getElementById('videos-content').innerHTML = `
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${videosHTML}
        </div>
        
        <!-- Video Modal -->
        <div id="videoModal" class="hidden fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div class="relative max-w-4xl w-full bg-black rounded-lg overflow-hidden">
                <button onclick="closeVideo()" class="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2">
                    <i class="fas fa-times text-xl"></i>
                </button>
                <div class="aspect-video" id="videoContainer"></div>
            </div>
        </div>
    `;
}

// Open Video Modal
function openVideo(embedId) {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('videoContainer');
    
    container.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${embedId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.classList.remove('hidden');
}

// Close Video Modal
function closeVideo() {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('videoContainer');
    container.innerHTML = '';
    modal.classList.add('hidden');
}

// Load Photos Tab
function loadPhotosTab(player) {
    if (!player.photos || player.photos.length === 0) {
        document.getElementById('photos-content').innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-images text-gray-300 text-6xl mb-4"></i>
                <p class="text-gray-500 text-lg">No photos available at the moment</p>
            </div>
        `;
        return;
    }
    
    const photosHTML = player.photos.map((photo, index) => `
        <div class="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg" onclick="openPhotoModal(${index})">
            <img src="${photo.url}" alt="${photo.title}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 class="font-semibold">${photo.title}</h4>
                </div>
            </div>
        </div>
    `).join('');
    
    document.getElementById('photos-content').innerHTML = `
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${photosHTML}
        </div>
        
        <!-- Photo Modal -->
        <div id="photoModal" class="hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div class="relative max-w-5xl w-full">
                <button onclick="closePhotoModal()" class="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-3">
                    <i class="fas fa-times text-2xl"></i>
                </button>
                <img id="modalPhoto" src="" alt="" class="max-w-full max-h-[90vh] mx-auto rounded-lg shadow-2xl">
            </div>
        </div>
    `;
}

// Open Photo Modal
function openPhotoModal(index) {
    const player = playersData[getPlayerId()];
    const photo = player.photos[index];
    const modal = document.getElementById('photoModal');
    const img = document.getElementById('modalPhoto');
    
    img.src = photo.url;
    img.alt = photo.title;
    modal.classList.remove('hidden');
}

// Close Photo Modal
function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.add('hidden');
}

// Load Reviews Tab
function loadReviewsTab(player) {
    if (!player.reviews || player.reviews.length === 0) {
        document.getElementById('reviews-content').innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-comments text-gray-300 text-6xl mb-4"></i>
                <p class="text-gray-500 text-lg">No reviews available at the moment</p>
            </div>
        `;
        return;
    }
    
    const reviewsHTML = player.reviews.map(review => `
        <div class="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-start justify-between mb-4">
                <div>
                    <h4 class="font-bold text-gray-900">${review.reviewer}</h4>
                    <p class="text-sm text-gray-600">${review.role}</p>
                </div>
                <div class="flex items-center">
                    <span class="text-yellow-500 text-xl mr-2">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                    <span class="text-sm text-gray-500">${review.date}</span>
                </div>
            </div>
            <p class="text-gray-600 leading-relaxed">${review.comment}</p>
        </div>
    `).join('');
    
    document.getElementById('reviews-content').innerHTML = `
        <div class="space-y-6">
            ${reviewsHTML}
        </div>
    `;
}

// Utility Functions
function formatKey(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

// Tab switching
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active', 'border-cricket-green', 'text-gray-700');
        btn.classList.add('text-gray-500');
    });

    // Show selected tab
    document.getElementById(tabName + '-tab').classList.remove('hidden');
    event.target.classList.add('active', 'border-cricket-green', 'text-gray-700');
    event.target.classList.remove('text-gray-500');
}

// Toggle favorite
function toggleFavorite(element) {
    const icon = element.querySelector('i');
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
    
    if (icon.classList.contains('fas')) {
        icon.style.color = '#ef4444';
        showToast('Saved to watchlist');
    } else {
        icon.style.color = '';
        showToast('Removed from watchlist');
    }
}

// Toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 2000);
}

// Function to go back to Find Talent
function goBackToFindTalent(event) {
    event.preventDefault();
    const scrollPosition = sessionStorage.getItem('findTalentScrollPosition');
    window.location.href = 'find-talent.html';
    
    if (scrollPosition) {
        sessionStorage.setItem('findTalentScrollPosition', scrollPosition);
    }
}

// Load profile on page load
window.onload = function() {
    loadPlayerProfile();
};

