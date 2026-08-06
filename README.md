k6-loadtest/
│
├── README.md                # Dokumentasi
├── .gitignore
├── .env.example             # Contoh konfigurasi
├── run.bat                  # Windows
├── run.sh                   # Linux/macOS
│
├── config/
│   ├── config.js            # Membaca env
│   ├── stages.js            # Semua stage test
│   └── thresholds.js        # Threshold global
│
├── tests/
│   ├── smoke.js
│   ├── load.js
│   ├── stress.js
│   └── soak.js
│
├── scenarios/
│   ├── login.js
│   ├── dashboard.js
│   ├── profile.js
│   └── transaction.js
│
├── data/
│   ├── users.json
│   └── payload.json
│
└── utils/
    ├── auth.js
    ├── request.js
    └── helper.js