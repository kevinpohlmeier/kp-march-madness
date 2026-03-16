function getTeamsForYear() {
  
  let teams = [
   
    // ===== EAST REGION (Duke 1-seed) =====
    { "TeamID": 1,  "Seed": "1",  "Name": "Duke"            },
    { "TeamID": 2,  "Seed": "16", "Name": "Siena"           },
    { "TeamID": 3,  "Seed": "8",  "Name": "Ohio St"         },
    { "TeamID": 4,  "Seed": "9",  "Name": "TCU"             },
    { "TeamID": 5,  "Seed": "5",  "Name": "St John's"       },
    { "TeamID": 6,  "Seed": "12", "Name": "Northern Iowa"   },
    { "TeamID": 7,  "Seed": "4",  "Name": "Kansas"          },
    { "TeamID": 8,  "Seed": "13", "Name": "Cal Baptist"     },
    { "TeamID": 9,  "Seed": "6",  "Name": "Louisville"      },
    { "TeamID": 10, "Seed": "11", "Name": "South Florida"   },
    { "TeamID": 11, "Seed": "3",  "Name": "Michigan St"     },
    { "TeamID": 12, "Seed": "14", "Name": "North Dakota St" },
    { "TeamID": 13, "Seed": "7",  "Name": "UCLA"            },
    { "TeamID": 14, "Seed": "10", "Name": "UCF"             },
    { "TeamID": 15, "Seed": "2",  "Name": "UConn"           },
    { "TeamID": 16, "Seed": "15", "Name": "Furman"          },
   
    // ===== SOUTH REGION (Florida 1-seed) =====
    { "TeamID": 17, "Seed": "1",  "Name": "Florida"         },
    { "TeamID": 18, "Seed": "16", "Name": "PVA/LEH",        "FirstFour": ["Prairie View AM", "Lehigh"] },
    { "TeamID": 19, "Seed": "8",  "Name": "Clemson"         },
    { "TeamID": 20, "Seed": "9",  "Name": "Iowa"            },
    { "TeamID": 21, "Seed": "5",  "Name": "Vanderbilt"      },
    { "TeamID": 22, "Seed": "12", "Name": "McNeese"         },
    { "TeamID": 23, "Seed": "4",  "Name": "Nebraska"        },
    { "TeamID": 24, "Seed": "13", "Name": "Troy"            },
    { "TeamID": 25, "Seed": "6",  "Name": "North Carolina"  },
    { "TeamID": 26, "Seed": "11", "Name": "VCU"             },
    { "TeamID": 27, "Seed": "3",  "Name": "Illinois"        },
    { "TeamID": 28, "Seed": "14", "Name": "Penn"            },
    { "TeamID": 29, "Seed": "7",  "Name": "Saint Mary's"    },
    { "TeamID": 30, "Seed": "10", "Name": "Texas A&M"       },
    { "TeamID": 31, "Seed": "2",  "Name": "Houston"         },
    { "TeamID": 32, "Seed": "15", "Name": "Idaho"           },
   
    // ===== WEST REGION (Arizona 1-seed) =====
    { "TeamID": 33, "Seed": "1",  "Name": "Arizona"         },
    { "TeamID": 34, "Seed": "16", "Name": "LIU"             },
    { "TeamID": 35, "Seed": "8",  "Name": "Villanova"       },
    { "TeamID": 36, "Seed": "9",  "Name": "Utah State"      },
    { "TeamID": 37, "Seed": "5",  "Name": "Wisconsin"       },
    { "TeamID": 38, "Seed": "12", "Name": "High Point"      },
    { "TeamID": 39, "Seed": "4",  "Name": "Arkansas"        },
    { "TeamID": 40, "Seed": "13", "Name": "Hawaii"          },
    { "TeamID": 41, "Seed": "6",  "Name": "BYU"             },
    { "TeamID": 42, "Seed": "11", "Name": "TEX/NCST",       "FirstFour": ["Texas", "NC St"] },
    { "TeamID": 43, "Seed": "3",  "Name": "Gonzaga"         },
    { "TeamID": 44, "Seed": "14", "Name": "Kennesaw St"     },
    { "TeamID": 45, "Seed": "7",  "Name": "Miami"           },
    { "TeamID": 46, "Seed": "10", "Name": "Missouri"        },
    { "TeamID": 47, "Seed": "2",  "Name": "Purdue"          },
    { "TeamID": 48, "Seed": "15", "Name": "Queens"          },
   
    // ===== MIDWEST REGION (Michigan 1-seed) =====
    { "TeamID": 49, "Seed": "1",  "Name": "Michigan"        },
    { "TeamID": 50, "Seed": "16", "Name": "UMBC/HOW",       "FirstFour": ["UMBC", "Howard"] },
    { "TeamID": 51, "Seed": "8",  "Name": "Georgia"         },
    { "TeamID": 52, "Seed": "9",  "Name": "Saint Louis"     },
    { "TeamID": 53, "Seed": "5",  "Name": "Texas Tech"      },
    { "TeamID": 54, "Seed": "12", "Name": "Akron"           },
    { "TeamID": 55, "Seed": "4",  "Name": "Alabama"         },
    { "TeamID": 56, "Seed": "13", "Name": "Hofstra"         },
    { "TeamID": 57, "Seed": "6",  "Name": "Tennessee"       },
    { "TeamID": 58, "Seed": "11", "Name": "MIA/SMU",        "FirstFour": ["Miami OH", "SMU"] },
    { "TeamID": 59, "Seed": "3",  "Name": "Virginia"        },
    { "TeamID": 60, "Seed": "14", "Name": "Wright St"       },
    { "TeamID": 61, "Seed": "7",  "Name": "Kentucky"        },
    { "TeamID": 62, "Seed": "10", "Name": "Santa Clara"     },
    { "TeamID": 63, "Seed": "2",  "Name": "Iowa State"      },
    { "TeamID": 64, "Seed": "15", "Name": "Tennessee St"    },
   
    // ===== FIRST FOUR EXTRAS =====
    { "TeamID": 65, "Seed": "16", "Name": "Prairie View AM" },
    { "TeamID": 66, "Seed": "16", "Name": "Lehigh"          },
    { "TeamID": 67, "Seed": "11", "Name": "Texas"           },
    { "TeamID": 68, "Seed": "11", "Name": "NC St"           },
    { "TeamID": 69, "Seed": "16", "Name": "UMBC"            },
    { "TeamID": 70, "Seed": "16", "Name": "Howard"          },
    { "TeamID": 71, "Seed": "11", "Name": "Miami OH"        },
    { "TeamID": 72, "Seed": "11", "Name": "SMU"             },
  ]

  return teams;
}
