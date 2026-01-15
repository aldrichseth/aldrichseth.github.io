// Current week's data to be appended to data.js
const CURRENT_WEEK_DATA = {
    date: '2026-01-16', // Update this date each week
    // All Applications Data
    all: {
        'All': {
            totalApplications: 825,
            missingMandatory: 360,
            missingQuality: 395,
            missingApprovals: 362,
            missingSurveys: 449
        },
        'IT / ERP': {
            totalApplications: 87,
            missingMandatory: 40,
            missingQuality: 43,
            missingApprovals: 55,
            missingSurveys: 65
        },
        'IT / HRIT': {
            totalApplications: 33,
            missingMandatory: 17,
            missingQuality: 17,
            missingApprovals: 6,
            missingSurveys: 15
        },
        'IT / I&O': {
            totalApplications: 160,
            missingMandatory: 60,
            missingQuality: 95,
            missingApprovals: 58,
            missingSurveys: 80
        },
        'IT / Security': {
            totalApplications: 38,
            missingMandatory: 4,
            missingQuality: 6,
            missingApprovals: 3,
            missingSurveys: 3
        },
        'IT / Winchester IT': {
            totalApplications: 297,
            missingMandatory: 190,
            missingQuality: 192,
            missingApprovals: 170,
            missingSurveys: 190
        },
        'IT / M&E': {
            totalApplications: 205,
            missingMandatory: 45,
            missingQuality: 38,
            missingApprovals: 68,
            missingSurveys: 94
        },
        'Site: EALT/OXFD': {
            totalApplications: 61,
            missingMandatory: 20,
            missingQuality: 22,
            missingApprovals: 13,
            missingSurveys: 23
        },
        'Site: LCAAP': {
            totalApplications: 190,
            missingMandatory: 115,
            missingQuality: 118,
            missingApprovals: 110,
            missingSurveys: 115
        },
        'IT / Winchester IT / BK&CD': {
            totalApplications: 110,
            missingMandatory: 70,
            missingQuality: 68,
            missingApprovals: 60,
            missingSurveys: 73
        },
        'IT / I&O / DNS&CI': {
            totalApplications: 53,
            missingMandatory: 23,
            missingQuality: 33,
            missingApprovals: 20,
            missingSurveys: 28
        },
        'IT / I&O / EUC': {
            totalApplications: 77,
            missingMandatory: 26,
            missingQuality: 47,
            missingApprovals: 31,
            missingSurveys: 40
        }
    },
    
    // CMMC Applications Data
    cmmc: {
        'All': {
            totalApplications: 193,
            missingMandatory: 65,
            missingQuality: 75,
            missingApprovals: 67,
            missingSurveys: 65
        },
        'IT / ERP': {
            totalApplications: 0,
            missingMandatory: 0,
            missingQuality: 0,
            missingApprovals: 0,
            missingSurveys: 0
        },
        'IT / HRIT': {
            totalApplications: 0,
            missingMandatory: 0,
            missingQuality: 0,
            missingApprovals: 0,
            missingSurveys: 0
        },
        'IT / I&O': {
            totalApplications: 24,
            missingMandatory: 1,
            missingQuality: 3,
            missingApprovals: 3,
            missingSurveys: 2
        },
        'IT / Security': {
            totalApplications: 21,
            missingMandatory: 0,
            missingQuality: 0,
            missingApprovals: 0,
            missingSurveys: 0
        },
        'IT / Winchester IT': {
            totalApplications: 142,
            missingMandatory: 64,
            missingQuality: 71,
            missingApprovals: 64,
            missingSurveys: 63
        },
        'IT / M&E': {
            totalApplications: 4,
            missingMandatory: 0,
            missingQuality: 0,
            missingApprovals: 0,
            missingSurveys: 0
        },
        'Site: EALT/OXFD': {
            totalApplications: 67,
            missingMandatory: 0,
            missingQuality: 7,
            missingApprovals: 5,
            missingSurveys: 0
        },
        'Site: LCAAP': {
            totalApplications: 129,
            missingMandatory: 63,
            missingQuality: 66,
            missingApprovals: 59,
            missingSurveys: 62
        }
    },
    
    // Non-CMMC Applications Data
    noncmmc: {
        'All': {
            totalApplications: 632,
            missingMandatory: 295,
            missingQuality: 320,
            missingApprovals: 295,
            missingSurveys: 384
        },
        'IT / ERP': {
            totalApplications: 87,
            missingMandatory: 40,
            missingQuality: 43,
            missingApprovals: 55,
            missingSurveys: 65
        },
        'IT / HRIT': {
            totalApplications: 33,
            missingMandatory: 17,
            missingQuality: 17,
            missingApprovals: 6,
            missingSurveys: 15
        },
        'IT / I&O': {
            totalApplications: 136,
            missingMandatory: 59,
            missingQuality: 92,
            missingApprovals: 55,
            missingSurveys: 78
        },
        'IT / Security': {
            totalApplications: 16,
            missingMandatory: 4,
            missingQuality: 6,
            missingApprovals: 3,
            missingSurveys: 3
        },
        'IT / Winchester IT': {
            totalApplications: 155,
            missingMandatory: 126,
            missingQuality: 121,
            missingApprovals: 106,
            missingSurveys: 127
        },
        'IT / M&E': {
            totalApplications: 201,
            missingMandatory: 45,
            missingQuality: 38,
            missingApprovals: 68,
            missingSurveys: 94
        },
        'Site: EALT/OXFD': {
            totalApplications: 45,
            missingMandatory: 20,
            missingQuality: 19,
            missingApprovals: 10,
            missingSurveys: 24
        },
        'Site: LCAAP': {
            totalApplications: 61,
            missingMandatory: 52,
            missingQuality: 53,
            missingApprovals: 51,
            missingSurveys: 53
        }
    }
};