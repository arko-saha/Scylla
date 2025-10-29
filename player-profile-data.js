// Comprehensive player data with detailed statistics
const playersData = {
    'james-mitchell': {
        name: 'James Mitchell',
        age: 18,
        location: 'Surrey, UK',
        role: 'Right-Hand Batsman | Right-Arm Fast Bowler',
        primaryRole: 'All-Rounder',
        skills: ['Power Hitter', 'Yorker Specialist', 'Leadership', 'Death Bowling'],
        bio: 'James is a dynamic all-rounder with exceptional pace bowling and aggressive batting skills. Known for his yorkers and ability to finish innings with power-hitting. Currently playing for Surrey County Cricket Club U19s and has been recognized as one of the most promising young talents in the UK.',
        
        // Quick Stats
        quickStats: {
            'Batting Avg': '45.2',
            'Bowling Avg': '18.7',
            'Wickets': '24',
            'Runs': '890'
        },
        
        // Detailed Batting Stats
        batting: {
            matches: 28,
            innings: 25,
            notOuts: 8,
            runs: 890,
            highest: 126,
            average: 52.35,
            strikeRate: 142.3,
            centuries: 3,
            halfCenturies: 8,
            fours: 127,
            sixes: 48,
            ducks: 1
        },
        
        // Detailed Bowling Stats
        bowling: {
            matches: 28,
            innings: 24,
            overs: 89.4,
            maidens: 8,
            runs: 448,
            wickets: 24,
            bestFigures: '5/28',
            economy: 4.99,
            average: 18.67,
            strikeRate: 22.4,
            fiveWickets: 2,
            fourWickets: 1
        },
        
        // Fielding Stats
        fielding: {
            catches: 15,
            runOuts: 3,
            stumpings: 0,
            catchesPerMatch: 0.54
        },
        
        // Performance Over Seasons
        seasonStats: [
            { season: '2024', matches: 15, runs: 542, wickets: 18, avg: 58.2, bwlAvg: 16.3 },
            { season: '2023', matches: 13, runs: 348, wickets: 6, avg: 43.5, bwlAvg: 22.5 }
        ],
        
        // Recent Match Performance
        recentMatches: [
            { opponent: 'Yorkshire U19', runs: 87, wickets: 3, result: 'Win', date: '2024-01-15' },
            { opponent: 'Essex U19', runs: 45, wickets: 1, result: 'Loss', date: '2024-01-08' },
            { opponent: 'Kent U19', runs: 126, wickets: 5, result: 'Win', date: '2024-01-01' },
            { opponent: 'Middlesex U19', runs: 34, wickets: 2, result: 'Win', date: '2023-12-18' }
        ],
        
        // Video Links (YouTube embed IDs or placeholder)
        videos: [
            { title: 'Match Highlights vs Kent', thumbnail: 'https://via.placeholder.com/640x360', embedId: 'dQw4w9WgXcQ' },
            { title: 'Batting Masterclass', thumbnail: 'https://via.placeholder.com/640x360', embedId: 'dQw4w9WgXcQ' },
            { title: 'Bowling Spell Highlights', thumbnail: 'https://via.placeholder.com/640x360', embedId: 'dQw4w9WgXcQ' }
        ],
        
        // Photo Gallery
        photos: [
            { url: 'https://via.placeholder.com/800x600/2D5016/FFFFFF?text=Batting+Action', title: 'Batting Stance' },
            { url: 'https://via.placeholder.com/800x600/D4AF37/FFFFFF?text=Match+Action', title: 'Match Action' },
            { url: 'https://via.placeholder.com/800x600/1E40AF/FFFFFF?text=Awards', title: 'Achievement Award' },
            { url: 'https://via.placeholder.com/800x600/DC2626/FFFFFF?text=Training', title: 'Training Session' }
        ],
        
        // Reviews/Testimonials
        reviews: [
            {
                reviewer: 'Coach David Smith',
                role: 'Surrey County Coach',
                rating: 5,
                comment: 'James is an exceptional talent with outstanding work ethic. His dedication to improvement is remarkable. Highly recommend for professional opportunities.',
                date: '2024-01-10'
            },
            {
                reviewer: 'Scout Michael Johnson',
                role: 'ECB Talent Scout',
                rating: 5,
                comment: 'Impressive all-round performance. His pace bowling and power-hitting make him a valuable asset. Watch out for this talent!',
                date: '2024-01-05'
            },
            {
                reviewer: 'Captain Sarah Williams',
                role: 'Team Captain',
                rating: 4,
                comment: 'Great team player and consistent performer. Always gives 100% effort in training and matches.',
                date: '2023-12-20'
            }
        ],
        
        rating: 4.8,
        totalReviews: 12,
        
        // Achievements
        achievements: [
            'Player of the Tournament - Surrey U19 Championship 2024',
            'Best All-Rounder - County Championship 2023',
            'ECB Emerging Talent Award 2023'
        ],
        
        form: 'Excellent',
        
        // Detailed Bio Sections
        bioSections: {
            journey: 'Started playing cricket at age 8, joined Surrey County Academy at 14. Rapidly progressed through age groups with exceptional performances.',
            strengths: 'Excellent yorker delivery, ability to handle pressure in death overs, powerful hitting, leadership qualities, and exceptional fitness levels.',
            goals: 'Aspires to represent England at international level and pursue a professional career in county cricket. Working towards securing a first-class contract.',
            training: 'Trains 5 days a week with specialized focus on pace bowling technique and power-hitting. Regular gym sessions for strength and conditioning.'
        }
    },
    
    'emma-chen': {
        name: 'Emma Chen',
        age: 17,
        location: 'Yorkshire, UK',
        role: 'Left-Hand Batsman | Left-Arm Orthodox',
        primaryRole: 'All-Rounder',
        skills: ['Agile Fielder', 'Spin Specialist', 'Consistent Scoring', 'Economical Bowling'],
        bio: 'Emma is a versatile all-rounder known for her elegant left-handed batting and economical spin bowling. Her exceptional fielding skills make her a complete package on the field. Currently represents Yorkshire Women\'s County Team.',
        
        quickStats: {
            'Batting Avg': '38.9',
            'Bowling Avg': '22.1',
            'Wickets': '19',
            'Catches': '22'
        },
        
        batting: {
            matches: 24,
            innings: 22,
            notOuts: 5,
            runs: 745,
            highest: 112,
            average: 43.82,
            strikeRate: 124.5,
            centuries: 2,
            halfCenturies: 6,
            fours: 98,
            sixes: 12,
            ducks: 0
        },
        
        bowling: {
            matches: 24,
            innings: 20,
            overs: 76.3,
            maidens: 12,
            runs: 421,
            wickets: 19,
            bestFigures: '4/31',
            economy: 5.50,
            average: 22.16,
            strikeRate: 24.2,
            fiveWickets: 0,
            fourWickets: 1
        },
        
        fielding: {
            catches: 22,
            runOuts: 2,
            stumpings: 0,
            catchesPerMatch: 0.92
        },
        
        seasonStats: [
            { season: '2024', matches: 12, runs: 398, wickets: 10, avg: 44.2, bwlAvg: 20.5 },
            { season: '2023', matches: 12, runs: 347, wickets: 9, avg: 43.4, bwlAvg: 23.8 }
        ],
        
        recentMatches: [
            { opponent: 'Lancashire W', runs: 68, wickets: 2, result: 'Win', date: '2024-01-14' },
            { opponent: 'Sussex W', runs: 45, wickets: 1, result: 'Win', date: '2024-01-07' },
            { opponent: 'Kent W', runs: 112, wickets: 4, result: 'Win', date: '2023-12-31' }
        ],
        
        videos: [
            { title: 'Century vs Kent', thumbnail: 'https://via.placeholder.com/640x360', embedId: 'dQw4w9WgXcQ' },
            { title: 'Fielding Highlights', thumbnail: 'https://via.placeholder.com/640x360', embedId: 'dQw4w9WgXcQ' }
        ],
        
        photos: [
            { url: 'https://via.placeholder.com/800x600/1E40AF/FFFFFF?text=Batting', title: 'Batting' },
            { url: 'https://via.placeholder.com/800x600/D4AF37/FFFFFF?text=Bowling', title: 'Bowling' }
        ],
        
        reviews: [
            {
                reviewer: 'Coach Linda Brown',
                role: 'Yorkshire Coach',
                rating: 5,
                comment: 'Emma\'s technique and dedication are exemplary. A complete cricketer with bright future ahead.',
                date: '2024-01-08'
            }
        ],
        
        rating: 4.6,
        totalReviews: 8,
        
        achievements: [
            'Young Player of the Year - Yorkshire 2024'
        ],
        
        form: 'Good',
        
        bioSections: {
            journey: 'Started cricket at age 10, joined Yorkshire Academy at 14. Made first-class debut at 16.',
            strengths: 'Economical bowling, elegant stroke play, exceptional fielding, composure under pressure.',
            goals: 'Represent England Women\'s team and excel in international cricket.',
            training: 'Regular batting and bowling practice with strength and conditioning 4 times per week.'
        }
    },
    
    'alex-patel': {
        name: 'Alex Patel',
        age: 19,
        location: 'London, UK',
        role: 'Wicket-Keeper | Right-Hand Batsman',
        primaryRole: 'Wicket-Keeper',
        skills: ['Quick Reflexes', 'Agile Movement', 'Safe Hands', 'Power Hitting'],
        bio: 'Alex is a dynamic wicket-keeper with lightning-fast reflexes and excellent batting skills. Known for safe hands behind the stumps and aggressive stroke play in front of them. Currently keeping for Middlesex County 2nd XI.',
        
        quickStats: {
            'Batting Avg': '42.5',
            'Stumpings': '12',
            'Catches': '18',
            'Dismissals': '30'
        },
        
        batting: {
            matches: 30,
            innings: 28,
            notOuts: 7,
            runs: 1020,
            highest: 145,
            average: 48.57,
            strikeRate: 138.9,
            centuries: 4,
            halfCenturies: 10,
            fours: 152,
            sixes: 32,
            ducks: 1
        },
        
        fielding: {
            catches: 18,
            stumpings: 12,
            runOuts: 5,
            catchesPerMatch: 0.6
        },
        
        seasonStats: [
            { season: '2024', matches: 16, runs: 580, dismissals: 16 },
            { season: '2023', matches: 14, runs: 440, dismissals: 14 }
        ],
        
        recentMatches: [
            { opponent: 'Essex 2nd', runs: 89, dismissals: 2, result: 'Win', date: '2024-01-16' },
            { opponent: 'Surrey 2nd', runs: 145, dismissals: 3, result: 'Win', date: '2024-01-09' }
        ],
        
        videos: [
            { title: 'Stumping Compilation', thumbnail: 'https://via.placeholder.com/640x360', embedId: 'dQw4w9WgXcQ' },
            { title: 'Century Highlights', thumbnail: 'https://via.placeholder.com/640x360', embedId: 'dQw4w9WgXcQ' }
        ],
        
        photos: [
            { url: 'https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=Keeping', title: 'Wicket Keeping' },
            { url: 'https://via.placeholder.com/800x600/2D5016/FFFFFF?text=Batting', title: 'Batting' }
        ],
        
        reviews: [
            {
                reviewer: 'Coach Robert Taylor',
                role: 'Middlesex Coach',
                rating: 5,
                comment: 'Best young keeper in the county circuit. Excellent technique and game awareness.',
                date: '2024-01-12'
            }
        ],
        
        rating: 4.9,
        totalReviews: 15,
        
        achievements: [
            'Best Wicket-Keeper - County 2nd XI Championship 2024'
        ],
        
        form: 'Outstanding',
        
        bioSections: {
            journey: 'Started keeping at age 11. Progressed through Middlesex age groups.',
            strengths: 'Lightning reflexes, safe hands, excellent reading of the game, aggressive batting.',
            goals: 'Represent Middlesex 1st XI and aim for England Lions selection.',
            training: 'Intensive keeping drills daily with batting practice and gym sessions.'
        }
    },
    
    'alex-thompson': {
        name: 'Alex Thompson',
        age: 19,
        location: 'London, UK',
        role: 'Right-Hand Opening Batsman',
        primaryRole: 'Batsman',
        skills: ['Power Hitter', 'Agile Fielder', 'Consistent Scoring', 'Quick Running'],
        bio: 'Aggressive opening batsman known for powerful hitting and consistent scoring at the top of the order. Excellent fielder with quick reflexes. Currently opening for Kent County U19s.',
        
        quickStats: {
            'Batting Avg': '42.5',
            'Strike Rate': '128.3',
            'Fifties': '12',
            'Catches': '18'
        },
        
        batting: {
            matches: 32,
            innings: 30,
            notOuts: 9,
            runs: 850,
            highest: 118,
            average: 40.48,
            strikeRate: 128.3,
            centuries: 2,
            halfCenturies: 12,
            fours: 134,
            sixes: 24,
            ducks: 1
        },
        
        fielding: {
            catches: 18,
            runOuts: 1,
            stumpings: 0,
            catchesPerMatch: 0.56
        },
        
        seasonStats: [
            { season: '2024', matches: 18, runs: 498, avg: 41.5 },
            { season: '2023', matches: 14, runs: 352, avg: 39.1 }
        ],
        
        recentMatches: [
            { opponent: 'Sussex U19', runs: 78, result: 'Win', date: '2024-01-17' },
            { opponent: 'Hampshire U19', runs: 118, result: 'Win', date: '2024-01-10' }
        ],
        
        videos: [
            { title: 'Opening Partnership', thumbnail: 'https://via.placeholder.com/640x360', embedId: 'dQw4w9WgXcQ' }
        ],
        
        photos: [
            { url: 'https://via.placeholder.com/800x600/DC2626/FFFFFF?text=Batting', title: 'Batting' },
            { url: 'https://via.placeholder.com/800x600/1E40AF/FFFFFF?text=Fielding', title: 'Fielding' }
        ],
        
        reviews: [
            {
                reviewer: 'Coach John Davies',
                role: 'Kent Coach',
                rating: 5,
                comment: 'Outstanding opener with great potential. Consistent and aggressive.',
                date: '2024-01-11'
            }
        ],
        
        rating: 4.9,
        totalReviews: 23,
        
        achievements: [
            'Best Opening Batsman - County U19 2024'
        ],
        
        form: 'Excellent',
        
        bioSections: {
            journey: 'Started cricket at age 9. Joined Kent Academy at 15.',
            strengths: 'Powerful hitting, quick running between wickets, safe fielding.',
            goals: 'Secure county contract and represent England U19s.',
            training: 'Daily batting practice with specialized power-hitting sessions.'
        }
    },
    
    'sarah-williams': {
        name: 'Sarah Williams',
        age: 21,
        location: 'Manchester, UK',
        role: 'Right-Hand Batsman | Right-Arm Medium Bowler',
        primaryRole: 'All-Rounder',
        skills: ['Agile Fielder', 'Consistent Bowling', 'Sound Technique'],
        bio: 'Versatile all-rounder with solid batting technique and effective medium-pace bowling. Strong presence on the field with excellent game awareness. Currently plays for Lancashire County Women\'s Team.',
        
        quickStats: {
            'Batting Avg': '38.2',
            'Bowling Avg': '24.8',
            'Wickets': '32',
            'Matches': '45'
        },
        
        batting: {
            matches: 45,
            innings: 40,
            notOuts: 8,
            runs: 720,
            highest: 96,
            average: 22.50,
            strikeRate: 115.2,
            centuries: 1,
            halfCenturies: 9,
            fours: 87,
            sixes: 8,
            ducks: 2
        },
        
        bowling: {
            matches: 45,
            innings: 42,
            overs: 189.5,
            maidens: 15,
            runs: 794,
            wickets: 32,
            bestFigures: '4/28',
            economy: 4.18,
            average: 24.81,
            strikeRate: 35.6,
            fiveWickets: 0,
            fourWickets: 1
        },
        
        fielding: {
            catches: 18,
            runOuts: 1,
            stumpings: 0,
            catchesPerMatch: 0.40
        },
        
        seasonStats: [
            { season: '2024', matches: 18, runs: 310, wickets: 15 },
            { season: '2023', matches: 27, runs: 410, wickets: 17 }
        ],
        
        recentMatches: [
            { opponent: 'Derbyshire W', runs: 45, wickets: 2, result: 'Win', date: '2024-01-13' }
        ],
        
        videos: [],
        photos: [],
        
        reviews: [
            {
                reviewer: 'Coach Mark Thompson',
                role: 'Lancashire Coach',
                rating: 5,
                comment: 'Very consistent performer with great team spirit.',
                date: '2024-01-06'
            }
        ],
        
        rating: 4.7,
        totalReviews: 18,
        
        achievements: [],
        
        form: 'Good',
        
        bioSections: {
            journey: 'Started cricket at age 12. Joined Lancashire at 17.',
            strengths: 'Consistent performance, good technique, reliable bowler.',
            goals: 'Continue improving and represent Lancashire 1st XI regularly.',
            training: 'Regular training 4 times per week.'
        }
    },
    
    'emma-davis': {
        name: 'Emma Davis',
        age: 18,
        location: 'Leeds, UK',
        role: 'Wicket-Keeper | Right-Hand Batsman',
        primaryRole: 'Wicket-Keeper',
        skills: ['Agile Fielder', 'Quick Stumping', 'Safe Hands'],
        bio: 'Young wicket-keeper with promising batting abilities. Quick behind the stumps with excellent glove work. Currently developing skills with Yorkshire U19s.',
        
        quickStats: {
            'Batting Avg': '35.2',
            'Stumpings': '8',
            'Catches': '14',
            'Dismissals': '22'
        },
        
        batting: {
            matches: 22,
            innings: 20,
            notOuts: 4,
            runs: 560,
            highest: 89,
            average: 35.00,
            strikeRate: 112.5,
            centuries: 0,
            halfCenturies: 6,
            fours: 78,
            sixes: 6,
            ducks: 1
        },
        
        fielding: {
            catches: 14,
            stumpings: 8,
            runOuts: 3,
            catchesPerMatch: 0.64
        },
        
        seasonStats: [
            { season: '2024', matches: 12, runs: 310, dismissals: 12 },
            { season: '2023', matches: 10, runs: 250, dismissals: 10 }
        ],
        
        recentMatches: [
            { opponent: 'Nottinghamshire U19', runs: 67, dismissals: 2, result: 'Win', date: '2024-01-15' }
        ],
        
        videos: [],
        photos: [],
        
        reviews: [
            {
                reviewer: 'Coach Peter Wilson',
                role: 'Yorkshire Coach',
                rating: 4,
                comment: 'Great potential. Improving rapidly with each match.',
                date: '2024-01-04'
            }
        ],
        
        rating: 4.6,
        totalReviews: 15,
        
        achievements: [],
        
        form: 'Good',
        
        bioSections: {
            journey: 'Started keeping at age 10. Joined Yorkshire Academy at 15.',
            strengths: 'Quick reflexes, improving batting, good attitude.',
            goals: 'Establish as first-choice keeper for Yorkshire U19s.',
            training: 'Daily keeping drills with batting practice.'
        }
    },
    
    'michael-brown': {
        name: 'Michael Brown',
        age: 22,
        location: 'Bristol, UK',
        role: 'Right-Hand Batsman | Right-Arm Fast Bowler',
        primaryRole: 'All-Rounder',
        skills: ['Power Hitter', 'Yorker Expert', 'Experience', 'Leadership'],
        bio: 'Professional all-rounder with exceptional batting and bowling skills. Consistent performer at high levels with significant experience in county cricket. Currently playing for Somerset County 2nd XI with aspirations for 1st XI selection.',
        
        quickStats: {
            'Batting Avg': '45.8',
            'Bowling Avg': '28.3',
            'Wickets': '45',
            'Matches': '68'
        },
        
        batting: {
            matches: 68,
            innings: 60,
            notOuts: 12,
            runs: 920,
            highest: 167,
            average: 19.17,
            strikeRate: 133.8,
            centuries: 5,
            halfCenturies: 11,
            fours: 152,
            sixes: 42,
            ducks: 2
        },
        
        bowling: {
            matches: 68,
            innings: 58,
            overs: 256.4,
            maidens: 18,
            runs: 1273,
            wickets: 45,
            bestFigures: '6/42',
            economy: 4.96,
            average: 28.29,
            strikeRate: 34.2,
            fiveWickets: 3,
            fourWickets: 4
        },
        
        fielding: {
            catches: 28,
            runOuts: 2,
            stumpings: 0,
            catchesPerMatch: 0.41
        },
        
        seasonStats: [
            { season: '2024', matches: 18, runs: 398, wickets: 15 },
            { season: '2023', matches: 25, runs: 322, wickets: 20 }
        ],
        
        recentMatches: [
            { opponent: 'Gloucestershire 2nd', runs: 98, wickets: 2, result: 'Win', date: '2024-01-18' }
        ],
        
        videos: [
            { title: 'Match Winning Performance', thumbnail: 'https://via.placeholder.com/640x360', embedId: 'dQw4w9WgXcQ' }
        ],
        
        photos: [],
        
        reviews: [
            {
                reviewer: 'Coach Steve Harris',
                role: 'Somerset Coach',
                rating: 5,
                comment: 'Professional attitude and excellent skills. Ready for 1st XI cricket.',
                date: '2024-01-14'
            },
            {
                reviewer: 'Captain James White',
                role: 'Team Captain',
                rating: 5,
                comment: 'Great leader and consistent match-winner. Highly valued team member.',
                date: '2024-01-08'
            }
        ],
        
        rating: 4.9,
        totalReviews: 42,
        
        achievements: [
            'Somerset 2nd XI Player of the Year 2023',
            'County Championship All-Star Team 2023'
        ],
        
        form: 'Excellent',
        
        bioSections: {
            journey: 'Professional cricket career since age 18. Consistent performer in county circuit.',
            strengths: 'Experience, leadership, power-hitting, pace bowling, match-winning ability.',
            goals: 'Secure 1st XI contract and establish professional cricket career.',
            training: 'Professional training regimen with fitness coach and technical specialists.'
        }
    },
    
    'sophie-wilson': {
        name: 'Sophie Wilson',
        age: 17,
        location: 'London, UK',
        role: 'Left-Hand Opening Batsman',
        primaryRole: 'Batsman',
        skills: ['Power Hitter', 'Future Star', 'Natural Talent'],
        bio: 'Promising young batsman with natural talent and determination. Shows great potential for future growth with aggressive batting style and excellent eye for the ball.',
        
        quickStats: {
            'Batting Avg': '28.4',
            'Strike Rate': '115.2',
            'Fifties': '3',
            'Matches': '18'
        },
        
        batting: {
            matches: 18,
            innings: 16,
            notOuts: 3,
            runs: 340,
            highest: 76,
            average: 26.15,
            strikeRate: 115.2,
            centuries: 0,
            halfCenturies: 3,
            fours: 52,
            sixes: 8,
            ducks: 2
        },
        
        fielding: {
            catches: 8,
            runOuts: 0,
            stumpings: 0,
            catchesPerMatch: 0.44
        },
        
        seasonStats: [
            { season: '2024', matches: 18, runs: 340, avg: 26.2 }
        ],
        
        recentMatches: [
            { opponent: 'Sussex U19', runs: 56, result: 'Loss', date: '2024-01-16' }
        ],
        
        videos: [],
        photos: [],
        
        reviews: [
            {
                reviewer: 'Coach Lucy Martin',
                role: 'Development Coach',
                rating: 4,
                comment: 'Great potential. With proper guidance will excel.',
                date: '2023-12-22'
            }
        ],
        
        rating: 4.3,
        totalReviews: 8,
        
        achievements: [],
        
        form: 'Promising',
        
        bioSections: {
            journey: 'Started cricket at age 11. Recently joined development academy.',
            strengths: 'Natural talent, aggressive batting, good eye-hand coordination.',
            goals: 'Progress to county cricket and develop professional career.',
            training: 'Regular practice and learning from senior players.'
        }
    }
};

