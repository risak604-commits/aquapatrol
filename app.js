/**
 * AquaPatrol — Multi-Language Aquaculture Telemetry & Farmer Visual Suite
 * Supports: English, Hindi, Telugu, Tamil, Malayalam, Gujarati, Bengali, Odia
 */

const I18N = {
  en: {
    brand_sub: "Simple Crab Farm Health Monitoring",
    nav_check: "💧 Check Water",
    nav_learn: "🎬 Visual & Video Guide",
    nav_checks: "What It Checks",
    nav_how: "How It Works",
    nav_why: "Why Use It",
    nav_faq: "Questions",
    btn_audio_read: "🔊 Read Page Aloud",
    btn_audio_stop: "⏹ Stop Reading",
    hero_kicker: "🌾 Made for farmers · India & Asia",
    hero_title: "Know your pond water. Protect your crabs.",
    hero_desc: "AquaPatrol is an affordable IoT-powered crab-farm monitoring system. It checks critical water conditions in real time and alerts farmers before mass mortality occurs.",
    btn_check_water: "💧 Check Pond Water",
    btn_watch_video: "🎬 Watch Farmer Video",
    stat_247: "24/7",
    stat_247_label: "Continuous readings",
    stat_sensors: "4",
    stat_sensors_label: "Key parameters",
    stat_esp: "ESP32",
    stat_esp_label: "Edge processor",
    stat_mud: "100%",
    stat_mud_label: "Pond mud resistant",

    live_pond: "🌊 Pond 01 — Kakinada",
    live_badge: "● LIVE",
    metric_ph: "pH",
    metric_ph_range: "Healthy: 6.5 – 8.5",
    metric_tds: "TDS",
    metric_tds_range: "Healthy: 10k – 25k ppm",
    metric_temp: "Temperature",
    metric_temp_range: "Healthy: 26° – 32°C",
    metric_turb: "Turbidity (Clarity)",
    metric_turb_range: "Healthy: 25 – 50 NTU",
    status_healthy_all: "✓ WATER STATUS: HEALTHY",

    // Visual & Video Guide
    vl_tag: "🌾 Visual Learning For Farmers",
    vl_title: "No Need To Read. See & Hear How It Works.",
    vl_desc: "Designed for small-holder farmers. Watch real video demonstrations from the field and understand how color alerts save your crabs.",
    v1_title: "Real Pond Setup & Farmer Demonstration",
    v1_desc: "Watch how AquaPatrol is deployed in muddy coastal crab ponds and how real-time readings alert the farmer right away.",
    v1_tag1: "🎥 Real Field Video",
    v1_tag2: "🌾 Mud Crab Farming",
    v1_step1_title: "1. Real Mud & Brackish Water Testing",
    v1_step1_desc: "See how the sensor probes sit directly in the pond without getting clogged by thick coastal silt or mud.",
    v1_step2_title: "2. Zero Lab Work Needed",
    v1_step2_desc: "Readings for pH, TDS, temperature, and turbidity (25 – 50 NTU) appear instantly on your phone with clear color codes.",
    v1_step3_title: "3. Instant Alert to Save Harvest",
    v1_step3_desc: "If water conditions deteriorate, an automatic alarm gives the farmer time to start aeration before crabs die.",

    cue_safe_title: "🟢 Green = Water is Safe",
    cue_safe_desc: "Crabs are eating well and active. No action needed.",
    cue_warn_title: "🟡 Yellow = Water Needs Care",
    cue_warn_desc: "Turbidity or pH is moving away. Add lime or fresh water.",
    cue_bad_title: "🔴 Red = Danger! Act Now",
    cue_bad_desc: "Turn on paddle aerators immediately and check water.",

    // Simulator
    sim_title: "🌾 Pond 01 — Interactive Water Simulator",
    sim_subtitle: "SIMULATION ONLY",
    sim_listen_btn: "🔊 Speak Status",
    sim_intro_title: "Check the water in a simple way",
    sim_intro_desc: "Move the sliders to simulate changes in pond water and observe the live status and water clarity Secchi tube.",
    safe_ph_label: "Healthy: 6.5 – 8.5",
    safe_tds_label: "Healthy: 10k – 25k ppm",
    safe_temp_label: "Healthy: 26° – 32°C",
    safe_turb_label: "Healthy: 25 – 50 NTU",
    secchi_title: "Water Clarity (Secchi Depth)",
    secchi_disc_label: "Secchi Disc",
    secchi_desc_opt: "✓ 25 – 50 NTU : Optimal plankton density & light penetration. Crabs thrive.",
    secchi_desc_murk: "⚠ Over 50 NTU: Too muddy / heavy silt & algal bloom. Risk of oxygen drop at night!",
    secchi_desc_clear: "⚠ Under 25 NTU: Water too clear! Sunlight burns bottom weeds, crabs turn cannibalistic.",
    sim_healthy_msg: "✓ All parameters are within the healthy range. Water is safe for mud crabs.",
    sim_warn_msg: "⚠ Attention: One or more parameters are slightly outside the optimal range. Keep watch.",
    sim_crit_msg: "🚨 DANGER: Severe imbalance detected! Risk of crab mortality. Start aeration or liming now.",
    btn_reset: "↺ Reset Example",

    // What AquaPatrol Checks
    checks_tag: "Comprehensive Probes",
    checks_title: "What AquaPatrol Checks in the Pond",
    checks_desc: "One rugged IoT device replaces multiple fragile glass meters and notebooks with reliable continuous monitoring.",
    check_ph_title: "pH (Acidity & Alkalinity)",
    check_ph_desc: "Crabs need a balanced pH of 7.5 to 8.5 to molt properly and form hard shells. Extreme pH burns gills.",
    check_turb_title: "Turbidity (Secchi Depth: 25 – 50 NTU )",
    check_turb_desc: "Measures water clarity and sunlight penetration. 25 – 50 NTU maintains the perfect plankton food web for crabs.",
    check_tds_title: "TDS (Total Dissolved Solids)",
    check_tds_desc: "Monitors mineral balance and salinity levels so crabs don't experience sudden osmotic shock after rainfall.",
    check_temp_title: "Water Temperature",
    check_temp_desc: "Monitors day and night temperature swings (26°–32°C) to prevent thermal stress and appetite loss.",
    check_esp_title: "ESP32 Microcontroller",
    check_esp_desc: "Dual-core processor with onboard Wi-Fi and Bluetooth filters sensor noise and operates reliably outdoors.",
    check_alerts_title: "WhatsApp & Voice Alerts",
    check_alerts_desc: "Farmers receive clear color-coded alerts and voice calls in local language when water goes bad.",

    // How it works
    how_title: "How It Works — Step by Step",
    how_desc: "From the pond to the farmer's pocket: uninterrupted protection 24 hours a day.",
    step1_title: "1. Place Near Water",
    step1_desc: "Mount AquaPatrol above the waterline. Probes submerge into the pond.",
    step2_title: "2. Sensors Read Water",
    step2_desc: "Continuously samples pH, TDS, temperature, and turbidity (25 – 50 NTU).",
    step3_title: "3. ESP32 Cleans Data",
    step3_desc: "Filters out ripples and sensor noise so readings are stable and accurate.",
    step4_title: "4. Cloud Telemetry",
    step4_desc: "Secure wireless transmission sends telemetry to the farmer's dashboard.",
    step5_title: "5. Automatic Alerts",
    step5_desc: "If turbidity or pH drifts away from safe limits, farmer gets an alert.",
    step6_title: "6. Quick Action",
    step6_desc: "Farmer starts aerator or adds lime before crabs suffer stress or death.",

    // Compare
    why_title: "Why AquaPatrol?",
    why_desc: "Water can change between farm visits. Seeing the trend early saves your entire harvest.",
    before_title: "Without AquaPatrol (Manual)",
    before_1: "Manual tests only once a day or when crabs act sick.",
    before_2: "Night-time oxygen drops go completely unnoticed.",
    before_3: "Turbidity measured by guess or dirty hand dipping.",
    before_4: "First warning is often dead crabs floating on the pond bank.",
    after_title: "With AquaPatrol (Smart IoT)",
    after_1: "Continuous automated readings 24 hours a day.",
    after_2: "Early warning when turbidity falls below 25 NTU or exceeds 50 NTU.",
    after_3: "Instant notification sent directly to your mobile phone.",
    after_4: "Act in advance with aerators or lime to protect profits.",

    // FAQs
    faq_title: "Questions Crab Farmers Ask",
    faq_1_q: "Do I need internet at the pond?",
    faq_1_a: "AquaPatrol supports Wi-Fi and cellular GSM. If connectivity is weak, readings are buffered locally on the ESP32 until the signal recovers.",
    faq_2_q: "Why is Turbidity 25 – 50 NTU the healthy range?",
    faq_2_a: "In mud crab aquaculture, water clarity of 25 – 50 NTU (measured via Secchi disc) represents the ideal balance. Below 25 NTU, water is too clear, triggering cannibalism and bottom weeds. Above 50 NTU, heavy suspended silt chokes crab gills and triggers nighttime oxygen crashes.",
    faq_3_q: "Can farmers who cannot read use this app?",
    faq_3_a: "Yes! AquaPatrol is built with big color-coded lights (Green, Yellow, Red), visual Secchi tubes, and an audio read-aloud button that speaks in Hindi, Telugu, Tamil, Bengali, Odia, Gujarati, Malayalam, and English.",
    faq_4_q: "Will the device survive rain, heat, and mud?",
    faq_4_a: "AquaPatrol is engineered in an IP65 water-resistant outdoor enclosure with corrosion-resistant aquaculture probes built specifically for coastal brackish water.",

    // Contact
    contact_title: "Protect Your Crab Farm Today",
    contact_desc: "Talk to our team to try AquaPatrol on your pond. No smartphone? A simple phone call works too.",
    contact_call: "📞 Call Helpline: +971 58 189 9486",
    contact_wa: "💬 WhatsApp Us: +971 58 189 9486",
    contact_email: "✉️ Email: aquapatrol26@gmail.com",
    footer_text: "Smarter Water. Healthier Crabs. Better Farming for Indian Aquaculture.",
    copyright: "© 2026 AquaPatrol. All rights reserved."
  },

  hi: {
    brand_sub: "केकड़ा फार्म के लिए सरल जल निगरानी",
    nav_check: "💧 पानी जांचें",
    nav_learn: "🎬 वीडियो एवं चित्र गाइड",
    nav_checks: "क्या जांचता है",
    nav_how: "यह कैसे काम करता है",
    nav_why: "क्यों उपयोग करें",
    nav_faq: "अक्सर पूछे जाने वाले सवाल",
    btn_audio_read: "🔊 बोलकर सुनाएं",
    btn_audio_stop: "⏹ सुनना बंद करें",
    hero_kicker: "🌾 किसानों के लिए निर्मित · भारत एवं एशिया",
    hero_title: "तालाब का पानी पहचानें। अपने केकड़ों की रक्षा करें।",
    hero_desc: "AquaPatrol एक किफायती IoT-आधारित केकड़ा-फार्म निगरानी प्रणाली है। यह वास्तविक समय में पानी की स्थिति जांचता है और केकड़ों के मरने से पहले किसानों को सचेत करता है।",
    btn_check_water: "💧 तालाब का पानी जांचें",
    btn_watch_video: "🎬 किसान वीडियो देखें",
    stat_247: "24/7",
    stat_247_label: "लगातार निगरानी",
    stat_sensors: "4",
    stat_sensors_label: "मुख्य पैरामीटर",
    stat_esp: "ESP32",
    stat_esp_label: "स्मार्ट चिप",
    stat_mud: "100%",
    stat_mud_label: "कीचड़ एवं खारे पानी सुरक्षित",

    live_pond: "🌊 तालाब 01 — लाइव",
    live_badge: "● चालू (LIVE)",
    metric_ph: "pH (अम्लीयता)",
    metric_ph_range: "सुरक्षित: 6.5 – 8.5",
    metric_tds: "TDS (खारापन)",
    metric_tds_range: "सुरक्षित स्तर: 10k – 25k ppm",
    metric_temp: "तापमान (Temperature)",
    metric_temp_range: "सुरक्षित: 26° – 32°C",
    metric_turb: "गंदलापन (Turbidity)",
    metric_turb_range: "सुरक्षित स्तर: 25 – 50 NTU",
    status_healthy_all: "✓ पानी की स्थिति: बिल्कुल स्वस्थ",

    vl_tag: "🌾 किसान दृश्य एवं वीडियो गाइड",
    vl_title: "पढ़ने की कोई जरूरत नहीं। देखकर और सुनकर समझें।",
    vl_desc: "कम पढ़े-लिखे किसान भाइयों के लिए खास तैयार: हमारे खेत वीडियो और रंगीन बत्तियों से जानिए कि आपके केकड़े कब सुरक्षित हैं।",
    v1_title: "खेत में स्थापना एवं किसान डेमो",
    v1_desc: "देखिए कैसे AquaPatrol को तालाब में लगाया जाता है और कैसे यह समय पर मोबाइल पर चेतावनी देता है।",
    v1_tag1: "🎥 असली खेत का वीडियो",
    v1_tag2: "🌾 केकड़ा पालन",
    v1_step1_title: "1. असली कीचड़ और खारे पानी में परीक्षण",
    v1_step1_desc: "देखें कि कैसे सेंसर के तार बिना जाम हुए सीधे तालाब के कीचड़ में काम करते हैं।",
    v1_step2_title: "2. किसी लैब या टेस्ट ट्यूब की जरूरत नहीं",
    v1_step2_desc: "pH, TDS, तापमान और गंदलापन (25 – 50 NTU) सीधे मोबाइल स्क्रीन पर साफ रंगों में दिखते हैं।",
    v1_step3_title: "3. फसल बचाने के लिए तुरंत चेतावनी",
    v1_step3_desc: "पानी खराब होते ही तुरंत सायरन/मैसेज आता है ताकि केकड़े मरने से पहले एरेटर चलाया जा सके।",

    cue_safe_title: "🟢 हरी बत्ती = पानी सुरक्षित है",
    cue_safe_desc: "केकड़े तंदुरुस्त हैं और खाना खा रहे हैं। कुछ करने की जरूरत नहीं।",
    cue_warn_title: "🟡 पीली बत्ती = पानी पर ध्यान दें",
    cue_warn_desc: "गंदलापन या pH बदल रहा है। चूना डालें या ताजा पानी मिलाएं।",
    cue_bad_title: "🔴 लाल बत्ती = खतरा! तुरंत काम करें",
    cue_bad_desc: "तुरंत पैडल एरेटर चलाएं और पानी की जांच करें।",

    sim_title: "🌾 तालाब 01 — जल स्थिति सिम्युलेटर",
    sim_subtitle: "केवल अभ्यास के लिए",
    sim_listen_btn: "🔊 आवाज में सुनें",
    sim_intro_title: "सरल तरीके से पानी की जांच करें",
    sim_intro_desc: "स्लाइडर हिलाकर देखें कि पानी बदलने पर क्या होता है। गंदलापन 25 से 50 NTU सबसे सही है।",
    safe_ph_label: "सुरक्षित: 6.5 – 8.5",
    safe_tds_label: "सुरक्षित: 10k – 25k ppm",
    safe_temp_label: "सुरक्षित: 26° – 32°C",
    safe_turb_label: "सुरक्षित: 25 – 50 NTU ",
    secchi_title: "पानी की पारदर्शिता (Secchi डिस्क)",
    secchi_disc_label: "सेक्की डिस्क",
    secchi_desc_opt: "✓ 25 – 50 NTU : सबसे उत्तम प्लांकटन और धूप। केकड़े तेजी से बढ़ते हैं।",
    secchi_desc_murk: "⚠ 50 NTU से अधिक: बहुत गंदा / गाद और काई! रात में ऑक्सीजन खत्म होने का खतरा।",
    secchi_desc_clear: "⚠ 25 NTU से कम: पानी बहुत साफ है! धूप तल तक पहुंचेगी, खरपतवार उगेगी और केकड़े आपस में लड़ेंगे।",
    sim_healthy_msg: "✓ सभी पैरामीटर सुरक्षित सीमा में हैं। तालाब केकड़ों के लिए बिल्कुल ठीक है।",
    sim_warn_msg: "⚠ ध्यान दें: एक या अधिक पैरामीटर थोड़े बाहर हैं। तालाब पर नजर रखें।",
    sim_crit_msg: "🚨 खतरा: पानी में गंभीर खराबी! तुरंत एरेटर चलाएं या चूना डालें।",
    btn_reset: "↺ दोबारा सेट करें",

    checks_tag: "सेंसर जानकारी",
    checks_title: "AquaPatrol तालाब में क्या जांचता है",
    checks_desc: "एक ही टिकाऊ उपकरण पुरानी डायरी और कांच के मीटरों की झंझट खत्म करता है।",
    check_ph_title: "pH (खारापन व तेजाबी असर)",
    check_ph_desc: "केकड़ों के खोल बदलने और तंदुरुस्ती के लिए pH 7.5 से 8.5 जरूरी है।",
    check_turb_title: "गंदलापन (Turbidity: 25 – 50 NTU )",
    check_turb_desc: "पानी की गहराई और सफाई नापता है। 25 – 50 NTU केकड़ों के लिए सबसे आदर्श स्तर है।",
    check_tds_title: "TDS (घुलनशील खनिज)",
    check_tds_desc: "बारिश के बाद पानी के खारेपन में अचानक बदलाव को रोकता है।",
    check_temp_title: "पानी का तापमान",
    check_temp_desc: "दिन और रात के तापमान (26°–32°C) पर नजर रखता है ताकि केकड़ों को तनाव न हो।",
    check_esp_title: "ESP32 स्मार्ट नियंत्रक",
    check_esp_desc: "सेंसर से शोर हटाकर पक्की और स्थिर रीडिंग किसान तक पहुंचाता है।",
    check_alerts_title: "व्हाट्सएप और फोन चेतावनी",
    check_alerts_desc: "खतरा होने पर किसान की भाषा में सीधे फोन पर सूचना मिल जाती है।",

    how_title: "यह कैसे काम करता है — सरल 6 चरण",
    how_desc: "तालाब से किसान के हाथ तक: 24 घंटे लगातार सुरक्षा।",
    step1_title: "1. तालाब किनारे लगाएं",
    step1_desc: "AquaPatrol को पानी के ऊपर लगाएं। इसके तार पानी में उतरते हैं।",
    step2_title: "2. सेंसर पानी नापते हैं",
    step2_desc: "pH, TDS, तापमान और गंदलापन (25 – 50 NTU) लगातार नापा जाता है।",
    step3_title: "3. ESP32 जांचता है",
    step3_desc: "लहरों के झटके हटाकर रीडिंग को बिल्कुल सटीक बनाता है।",
    step4_title: "4. वायरलेस संदेश",
    step4_desc: "इंटरनेट या सिम द्वारा जानकारी किसान के फोन पर जाती है।",
    step5_title: "5. अलर्ट संदेश",
    step5_desc: "पानी बिगड़ने पर तुरंत घंटी या मैसेज आ जाता है।",
    step6_title: "6. तुरंत समाधान",
    step6_desc: "किसान समय रहते चूना डाल सकता है या पंखा (एरेटर) चला सकता है।",

    why_title: "AquaPatrol क्यों जरूरी है?",
    why_desc: "दो दौरों के बीच तालाब का पानी कभी भी बिगड़ सकता है। समय पर पता चलना ही फायदा है।",
    before_title: "पहले (पारंपरिक तरीका)",
    before_1: "दिन में सिर्फ एक बार हाथ से नापना।",
    before_2: "रात में ऑक्सीजन घटने का पता ही नहीं चलता था।",
    before_3: "पानी कितना गंदा है, केवल आंखों के अंदाजे से देखते थे।",
    before_4: "जब केकड़ा मरकर ऊपर तैरने लगे, तब पता चलता था।",
    after_title: "अब AquaPatrol के साथ",
    after_1: "24 घंटे लगातार अपने आप निगरानी।",
    after_2: "गंदलापन 25 NTU से कम या 50 NTU से ज्यादा होते ही तुरंत चेतावनी।",
    after_3: "फोन पर सीधी घंटी और संदेश।",
    after_4: "केकड़े मरने से पहले ही तुरंत सुधार करने का मौका।",

    faq_title: "किसानों के आम सवाल",
    faq_1_q: "क्या तालाब पर इंटरनेट होना जरूरी है?",
    faq_1_a: "AquaPatrol में सिम कार्ड और वाई-फाई दोनों की सुविधा है। नेटवर्क कमजोर होने पर भी यह डेटा सुरक्षित रखता है।",
    faq_2_q: "गंदलापन 25-50 NTU क्यों सही माना जाता है?",
    faq_2_a: "केकड़ा पालन में 25 – 50 NTU पारदर्शिता (Secchi depth) सबसे अच्छी होती है। 25 से कम होने पर पानी बहुत साफ होकर केकड़े आपस में लड़ने लगते हैं; 50 से ज्यादा होने पर गाद गलफड़ों को बंद कर देती है और सांस घुटती है।",
    faq_3_q: "क्या कम पढ़े-लिखे किसान इसका इस्तेमाल कर सकते हैं?",
    faq_3_a: "जी हां! इसमें बड़े रंगीन संकेत (हरा, पीला, लाल) और बोलकर सुनाने वाला ऑडियो बटन दिया गया है जो आपकी भाषा में बोलता है।",
    faq_4_q: "क्या यह मशीन धूप, बारिश और कीचड़ झेलेगी?",
    faq_4_a: "AquaPatrol पूरी तरह वाटरप्रूफ और जंग-रोधी बॉडी में बना है, जो खारे पानी और कीचड़ के लिए खास तैयार है।",

    contact_title: "अपने केकड़ा फार्म को सुरक्षित बनाएं",
    contact_desc: "हमारी टीम से बात करें। स्मार्टफोन नहीं है तो साधारण फोन कॉल भी कर सकते हैं।",
    contact_call: "📞 फोन हेल्पलाइन: +971 58 189 9486",
    contact_wa: "💬 व्हाट्सएप: +971 58 189 9486",
    contact_email: "✉️ ईमेल: aquapatrol26@gmail.com",
    footer_text: "स्मार्ट पानी। स्वस्थ केकड़े। भारतीय किसानों की सच्ची उन्नति।",
    copyright: "© 2026 AquaPatrol. सर्वाधिकार सुरक्षित।"
  },

  te: {
    brand_sub: "పీతల చెరువుల ఆరోగ్య పర్యవేక్షణ",
    nav_check: "💧 నీటిని పరీక్షించండి",
    nav_learn: "🎬 వీడియో & బొమ్మల గైడ్",
    nav_checks: "పరీక్షించే అంశాలు",
    nav_how: "ఎలా పనిచేస్తుంది",
    nav_why: "ఎందుకు వాడాలి",
    nav_faq: "ప్రశ్నలు",
    btn_audio_read: "🔊 చదివి వినిపించండి",
    btn_audio_stop: "⏹ ఆపండి",
    hero_kicker: "🌾 రైతుల కోసం తయారుచేయబడింది · భారతదేశం",
    hero_title: "మీ చెరువు నీటిని తెలుసుకోండి. మీ పీతలను రక్షించండి.",
    hero_desc: "AquaPatrol అనేది సరసమైన IoT ఆధారిత పీతల చెరువుల పర్యవేక్షణ పరికరం. ఇది నీటి పరిస్థితులను నిరంతరం కనిపెడుతూ, నష్టం జరగకముందే రైతులకు సమాచారం ఇస్తుంది.",
    btn_check_water: "💧 నీటిని తనిఖీ చేయండి",
    btn_watch_video: "🎬 రైతు వీడియో చూడండి",
    stat_247: "24/7",
    stat_247_label: "నిరంతర కొలతలు",
    stat_sensors: "4",
    stat_sensors_label: "ముఖ్య సూచికలు",
    stat_esp: "ESP32",
    stat_esp_label: "స్మార్ట్ చిప్",
    stat_mud: "100%",
    stat_mud_label: "మట్టి & ఉప్పు నీటి తట్టుకుంటుంది",

    live_pond: "🌊 చెరువు 01 — ప్రత్యక్షం",
    live_badge: "● లైవ్",
    metric_ph: "pH (ఆమ్లత్వం)",
    metric_ph_range: "మంచి పరిధి: 6.5 – 8.5",
    metric_tds: "TDS (లవణీయత)",
    metric_tds_range: "మంచి పరిధి: 10k – 25k ppm",
    metric_temp: "ఉష్ణోగ్రత",
    metric_temp_range: "మంచి పరిధి: 26° – 32°C",
    metric_turb: "నీటి స్వచ్ఛత (Turbidity)",
    metric_turb_range: "అనుకూల పరిధి: 25 – 50 NTU",
    status_healthy_all: "✓ నీటి స్థితి: చాలా క్షేమంగా ఉంది",

    vl_tag: "🌾 రైతులకు దృశ్య మరియు వీడియో గైడ్",
    vl_title: "చదవాల్సిన అవసరం లేదు. చూసి విని తెలుసుకోండి.",
    vl_desc: "రైతుల సౌలభ్యం కోసం ప్రత్యేక వీడియోలు మరియు రంగుల సూచికలు. మీ పీతలు ఎప్పుడు సురక్షితంగా ఉన్నాయో ఇట్టే తెలుసుకోండి.",
    v1_title: "చెరువులో పరికరం అమరిక & రైతు డెమో",
    v1_desc: "AquaPatrol చెరువులో ఎలా అమర్చుతారు మరియు ఫోన్‌కు హెచ్చరికలు ఎలా వస్తాయో చూడండి.",
    v1_tag1: "🎥 నిజమైన చెరువు వీడియో",
    v1_tag2: "🌾 పీతల సాగు",
    v1_step1_title: "1. చెరువు మట్టి మరియు ఉప్పు నీటిలో పరీక్ష",
    v1_step1_desc: "తీరప్రాంత చెరువుల్లోని చిక్కటి మట్టిలో సెన్సార్లు జామ్ కాకుండా ఎలా పనిచేస్తాయో చూడండి.",
    v1_step2_title: "2. ల్యాబ్ పరీక్షల అవసరం లేదు",
    v1_step2_desc: "pH, TDS, ఉష్ణోగ్రత మరియు స్వచ్ఛత (25 – 50 NTU) రీడింగ్‌లు రంగుల గుర్తుల ద్వారా నేరుగా మొబైల్‌లో కనిపిస్తాయి.",
    v1_step3_title: "3. పీతలను రక్షించే తక్షణ హెచ్చరిక",
    v1_step3_desc: "నీరు పాడైతే వెంటనే అలారం మోగుతుంది, తద్వారా పీతలు చనిపోకుండా వెంటనే ఫ్యాన్లు వేయవచ్చు.",

    cue_safe_title: "🟢 పచ్చ రంగు = నీరు క్షేమంగా ఉంది",
    cue_safe_desc: "పీతలు బాగా తింటున్నాయి, ఆరోగ్యంగా ఉన్నాయి.",
    cue_warn_title: "🟡 పసుపు రంగు = నీటిని జాగ్రత్తగా చూడండి",
    cue_warn_desc: "మడ్డితనం లేదా pH మారినది. సున్నం లేదా మంచినీరు కలపండి.",
    cue_bad_title: "🔴 ఎరుపు రంగు = ప్రమాదం! వెంటనే స్పందించండి",
    cue_bad_desc: "వెంటనే ఏరియేటర్లు (ఫ్యాన్లు) ఆన్ చేయండి.",

    sim_title: "🌾 చెరువు 01 — నీటి పరీక్ష డెమో",
    sim_subtitle: "డెమో మాత్రమే",
    sim_listen_btn: "🔊 వాయిస్ వినండి",
    sim_intro_title: "నీటిని సులభంగా పరీక్షించండి",
    sim_intro_desc: "స్లైడర్లను జరిపి నీరు మారినప్పుడు ఏమౌతుందో చూడండి. స్వచ్ఛత 25-50 NTU ఉండటం ఉత్తమం.",
    safe_ph_label: "మంచి పరిధి: 6.5 – 8.5",
    safe_tds_label: "మంచి పరిధి: 10k – 25k ppm",
    safe_temp_label: "మంచి పరిధి: 26° – 32°C",
    safe_turb_label: "మంచి పరిధి: 25 – 50 NTU ",
    secchi_title: "నీటి స్పష్టత (Secchi డిస్క్)",
    secchi_disc_label: "సెక్కీ డిస్క్",
    secchi_desc_opt: "✓ 25 – 50 NTU : పీతలకు కావలసిన పరిపూర్ణమైన ప్లవకాలు మరియు సూర్యరశ్మి.",
    secchi_desc_murk: "⚠ 50 NTU పైగా: చాలా మడ్డిగా ఉంది! రాత్రిపూట ఆక్సిజన్ పడిపోయే ప్రమాదం.",
    secchi_desc_clear: "⚠ 25 NTU లోపు: నీరు మరీ స్వచ్ఛంగా ఉంది! పాచి పెరిగి పీతలు ఒకదానికొకటి తింటాయి.",
    sim_healthy_msg: "✓ కొలతలన్నీ సురక్షిత పరిధిలో ఉన్నాయి. పీతలకు నీరు అనుకూలం.",
    sim_warn_msg: "⚠ గమనిక: ఒకటి లేదా రెండు కొలతలు మారాయి. చెరువును గమనించండి.",
    sim_crit_msg: "🚨 తీవ్ర హెచ్చరిక! వెంటనే ఏరియేటర్ ఆన్ చేయండి లేదా సున్నం వేయండి.",
    btn_reset: "↺ మళ్ళీ సెట్ చేయండి",

    checks_tag: "సెన్సార్ల వివరాలు",
    checks_title: "AquaPatrol చెరువులో ఏమి కొలుస్తుంది?",
    checks_desc: "ఒకే పరికరంతో పాత పుస్తకాలు, చేతి మీటర్ల అవసరం లేకుండా నిరంతరం పర్యవేక్షణ.",
    check_ph_title: "pH (ఆమ్ల-క్షార గుణం)",
    check_ph_desc: "పీతలు కుబుసం విడిచి పెరగడానికి pH 7.5 నుండి 8.5 మధ్య ఉండాలి.",
    check_turb_title: "నీటి స్వచ్ఛత (Turbidity: 25 – 50 NTU )",
    check_turb_desc: "సూర్యరశ్మి మరియు మడ్డితనం కొలుస్తుంది. 25 – 50 NTU ఉంటే పీతలు బలంగా ఎదుగుతాయి.",
    check_tds_title: "TDS (లవణీయత)",
    check_tds_desc: "వర్షం పడినప్పుడు ఉప్పుశాతం తగ్గడం వల్ల పీతలకు వచ్చే షాక్‌ను అరికడుతుంది.",
    check_temp_title: "నీటి ఉష్ణోగ్రత",
    check_temp_desc: "రాత్రి, పగటి ఉష్ణోగ్రతలను (26°–32°C) సరిచూసి పీతలు ఒత్తిడికి గురికాకుండా చూస్తుంది.",
    check_esp_title: "ESP32 చిప్",
    check_esp_desc: "అలల వల్ల వచ్చే తప్పుడు కొలతలను సరిచేసి సరైన సమాచారం ఇస్తుంది.",
    check_alerts_title: "వాట్సాప్ & ఫోన్ సమాచారం",
    check_alerts_desc: "నీరు పాడైతే రైతుకు తెలుగులో మెసేజ్ మరియు ఫోన్ కాల్ వస్తుంది.",

    how_title: "పనిచేసే విధానం — 6 దశలు",
    how_desc: "చెరువు నుండి రైతు చేతి వరకు: 24 గంటల నిరంతర రక్షణ.",
    step1_title: "1. చెరువు వద్ద పెట్టండి",
    step1_desc: "AquaPatrol పరికరాన్ని నీటిపై అమర్చండి. వైర్లు నీటిలోకి వెళ్తాయి.",
    step2_title: "2. సెన్సార్ల కొలత",
    step2_desc: "pH, TDS, ఉష్ణోగ్రత, మరియు స్వచ్ఛత (25 – 50 NTU) నిరంతరం కొలుస్తుంది.",
    step3_title: "3. ESP32 తనిఖీ",
    step3_desc: "సరైన రీడింగ్‌ను మాత్రమే సేకరించి స్పష్టమైన సమాచారాన్ని సిద్ధం చేస్తుంది.",
    step4_title: "4. ఫోన్‌కు పంపడం",
    step4_desc: "వైర్‌లెస్ ద్వారా చెరువు రీడింగులు రైతు మొబైల్‌కు చేరుతాయి.",
    step5_title: "5. అలర్ట్ రావడం",
    step5_desc: "పరిమితి దాటితే వెంటనే ఎరుపు లేదా పసుపు అలర్ట్ వస్తుంది.",
    step6_title: "6. రైతు పరిష్కారం",
    step6_desc: "రైతు సమయానికి సున్నం వేయడం లేదా ఏరియేటర్ వేసి పీతలను కాపాడుకుంటారు.",

    why_title: "AquaPatrol ఎందుకు వాడాలి?",
    why_desc: "రెండు సందర్శనల మధ్య నీరు అకస్మాత్తుగా మారవచ్చు. ముందే తెలుసుకుంటే పంట రక్షించబడుతుంది.",
    before_title: "మునుపు (సాధారణ పద్ధతి)",
    before_1: "రోజుకు ఒక్కసారే చేతితో కొలవడం.",
    before_2: "రాత్రిపూట ఆక్సిజన్ తగ్గితే తెలియదు.",
    before_3: "నీటి స్వచ్ఛతను కంటి చూపుతోనే అంచనా వేయడం.",
    before_4: "పీతలు చనిపోయి తేలిన తర్వాతే సమస్య తెలిసేది.",
    after_title: "ఇప్పుడు AquaPatrol తో",
    after_1: "24 గంటల ఆటోమేటిక్ పర్యవేక్షణ.",
    after_2: "స్వచ్ఛత 25 కంటే తగ్గినా, 50 దాటినా వెంటనే హెచ్చరిక.",
    after_3: "ఫోన్‌కు నేరుగా సమాచారం.",
    after_4: "నష్టం జరగకముందే సరిదిద్దుకునే అవకాశం.",

    faq_title: "రైతులు తరచుగా అడిగే ప్రశ్నలు",
    faq_1_q: "చెరువు వద్ద ఇంటర్నెట్ ఉండాలా?",
    faq_1_a: "AquaPatrol వై-ఫై మరియు సిమ్ కార్డు రెండింటితో పనిచేస్తుంది. సిగ్నల్ లేకున్నా సమాచారాన్ని భద్రపరుస్తుంది.",
    faq_2_q: "నీటి స్వచ్ఛత 25-50 NTU ఎందుకు ఉండాలి?",
    faq_2_a: "పీతల చెరువులో 25 – 50 NTU స్పష్టత ఉంటేనే ప్లవకాలు సరిగ్గా ఉంటాయి. 25 కంటే తక్కువైతే కింద పాచి పెరిగి పీతలు ఒకదానికొకటి తింటాయి; 50 దాటితే మట్టి వల్ల మొప్పలు మూసుకుపోయి ఊపిరి ఆడదు.",
    faq_3_q: "చదువురాని రైతులు దీనిని వాడవచ్చా?",
    faq_3_a: "ఖచ్చితంగా! ఇందులో పెద్ద రంగుల బల్బులు (పచ్చ, పసుపు, ఎరుపు) మరియు తెలుగులో మాట్లాడే వాయిస్ బటన్ ఉన్నాయి.",
    faq_4_q: "ఎండ, వాన, మట్టిలో ఈ పరికరం పాడవదా?",
    faq_4_a: "AquaPatrol ఉప్పునీరు మరియు ఎండను తట్టుకునేలా అత్యుత్తమ వాటర్‌ప్రూఫ్ బాడీతో తయారుచేయబడింది.",

    contact_title: "మీ పీతల చెరువును ఇప్పుడే కాపాడుకోండి",
    contact_desc: "మరిన్ని వివరాలకు మా టీమ్‌తో మాట్లాడండి. సాధారణ ఫోన్ కాల్ కూడా చేయవచ్చు.",
    contact_call: "📞 హెల్ప్‌లైన్: +971 58 189 9486",
    contact_wa: "💬 వాట్సాప్: +971 58 189 9486",
    contact_email: "✉️ ఈమెయిల్: aquapatrol26@gmail.com",
    footer_text: "తెలివైన నీటి నిర్వహణ. ఆరోగ్యకరమైన పీతలు. లాభదాయకమైన వ్యవసాయం.",
    copyright: "© 2026 AquaPatrol. సర్వహక్కులు ప్రత్యేకించబడినవి."
  },

  ta: {
    brand_sub: "நண்டுப் பண்ணைகளுக்கான எளிய நீர் கண்காணிப்பு",
    nav_check: "💧 நீரை சோதிக்க",
    nav_learn: "🎬 வீடியோ மற்றும் வழிகாட்டி",
    nav_checks: "கண்காணிக்கும் அளவுகள்",
    nav_how: "செயல்படும் விதம்",
    nav_why: "ஏன் பயன்படுத்த வேண்டும்",
    nav_faq: "கேள்விகள்",
    btn_audio_read: "🔊 வாசித்து காட்டு",
    btn_audio_stop: "⏹ நிறுத்து",
    hero_kicker: "🌾 விவசாயிகளுக்காக உருவாக்கப்பட்டது · இந்தியா",
    hero_title: "குளத்து நீரை அறிந்திடுங்கள். உங்கள் நண்டுகளை காத்திடுங்கள்.",
    hero_desc: "AquaPatrol என்பது மலிவு விலையிலான IoT நண்டுப் பண்ணை கண்காணிப்பு சாதனம். இது நீரின் தன்மையை உடனுக்குடன் சோதித்து, இழப்பு ஏற்படும் முன் விவசாயிகளுக்கு எச்சரிக்கிறது.",
    btn_check_water: "💧 குளத்து நீரை சோதிக்க",
    btn_watch_video: "🎬 விவசாயி வீடியோ காண்க",
    stat_247: "24/7",
    stat_247_label: "தொடர் கண்காணிப்பு",
    stat_sensors: "4",
    stat_sensors_label: "முக்கிய அளவுகள்",
    stat_esp: "ESP32",
    stat_esp_label: "ஸ்மார்ட் சிப்",
    stat_mud: "100%",
    stat_mud_label: "சேறு & உப்பு நீர் தாங்கும்",

    live_pond: "🌊 குளம் 01 — நேரலை",
    live_badge: "● லைவ்",
    metric_ph: "pH (அமிலத்தன்மை)",
    metric_ph_range: "உகந்தது: 6.5 – 8.5",
    metric_tds: "TDS (உப்புத்தன்மை)",
    metric_tds_range: "உகந்தது: 10k – 25k ppm",
    metric_temp: "வெப்பநிலை",
    metric_temp_range: "உகந்தது: 26° – 32°C",
    metric_turb: "நீர்க் கலங்கல் தன்மை (Turbidity)",
    metric_turb_range: "உகந்த அளவு: 25 – 50 NTU",
    status_healthy_all: "✓ நீரின் நிலை: மிக நலம்",

    vl_tag: "🌾 விவசாயிகளுக்கான காட்சி மற்றும் வீடியோ வழிகாட்டி",
    vl_title: "படிக்கத் தேவையில்லை. பார்த்தும் கேட்டும் தெரிந்துகொள்ளலாம்.",
    vl_desc: "எளிய விவசாயிகளுக்காக நிஜப் பண்ணை வீடியோக்கள் மற்றும் நிறக் குறியீடுகள் மூலம் நண்டுகளின் நலனை உடனே அறியலாம்.",
    v1_title: "குளத்தில் பொருத்துதல் & கள வீடியோ",
    v1_desc: "AquaPatrol எவ்வாறு குளத்தில் பொருத்தப்பட்டு உடனடி எச்சரிக்கைகளை அனுப்புகிறது என்பதைப் பாருங்கள்.",
    v1_tag1: "🎥 நிஜப் பண்ணை வீடியோ",
    v1_tag2: "🌾 நண்டு வளர்ப்பு",
    v1_step1_title: "1. நிஜ சேறு மற்றும் உவர் நீரில் சோதனை",
    v1_step1_desc: "அடர்ந்த கடற்கரை சேற்றில் சென்சார்கள் அடைத்துக்கொள்ளாமல் நீரில் எவ்வாறு செயல்படுகின்றன என்பதைப் பாருங்கள்.",
    v1_step2_title: "2. பரிசோதனைக் கூடம் எதுவும் தேவையில்லை",
    v1_step2_desc: "pH, TDS, வெப்பநிலை மற்றும் கலங்கல் (25 – 50 NTU) அளவுகள் எளிய வண்ணக் குறியீடுகளுடன் போனில் நேரடியாகத் தோன்றும்.",
    v1_step3_title: "3. இழப்பைத் தடுக்கும் உடனடி எச்சரிக்கை",
    v1_step3_desc: "நீரின் தரம் குறைந்தால் உடனடி எச்சரிக்கை ஒலிக்கும், நண்டுகள் இறக்கும் முன் காற்றோட்ட விசிறியை இயக்கலாம்.",

    cue_safe_title: "🟢 பச்சை = நீர் பாதுகாப்பானது",
    cue_safe_desc: "நண்டுகள் நன்றாக உண்டு நலமாக உள்ளன.",
    cue_warn_title: "🟡 மஞ்சள் = நீரை கவனிக்கவும்",
    cue_warn_desc: "கலங்கல் அல்லது pH மாறியுள்ளது. சுண்ணாம்பு அல்லது நல்ல நீர் சேர்க்கவும்.",
    cue_bad_title: "🔴 சிவப்பு = ஆபத்து! உடனே செயல்படுங்கள்",
    cue_bad_desc: "உடனே காற்றோட்ட விசிறியை (Aerator) இயக்கவும்.",

    sim_title: "🌾 குளம் 01 — மாதிரி நீர் பரிசோதனை",
    sim_subtitle: "மாதிரி மட்டுமே",
    sim_listen_btn: "🔊 குரலில் கேட்க",
    sim_intro_title: "நீரை எளிதாக சோதித்துப் பாருங்கள்",
    sim_intro_desc: "அளவுகளை மாற்றி நிலைமையை சோதிக்கவும். கலங்கல் அளவு 25-50 NTU இருப்பதே சிறந்தது.",
    safe_ph_label: "உகந்தது: 6.5 – 8.5",
    safe_tds_label: "உகந்தது: 10k – 25k ppm",
    safe_temp_label: "உகந்தது: 26° – 32°C",
    safe_turb_label: "உகந்தது: 25 – 50 NTU ",
    secchi_title: "நீரின் ஒளி ஊடுருவல் (Secchi தட்டு)",
    secchi_disc_label: "செக்கி தட்டு",
    secchi_desc_opt: "✓ 25 – 50 NTU : நண்டுகளுக்கு ஏற்ற பிளாங்க்டன் மற்றும் சூரிய ஒளி. வளர்ச்சி அருமை.",
    secchi_desc_murk: "⚠ 30 செ.மீ-க்கு கீழ்: அதிக சேறு/பாசி! இரவில் ஆக்சிஜன் குறையும் ஆபத்து.",
    secchi_desc_clear: "⚠ 40 செ.மீ-க்கு மேல்: நீர் மிகத் தெளிவாக உள்ளது! தரை பாசி வளர்ந்து நண்டுகள் ஒன்றை ஒன்று தாக்கும்.",
    sim_healthy_msg: "✓ அனைத்து அளவுகளும் சரியான வரம்பில் உள்ளன. நீர் நண்டுகளுக்கு சிறந்தது.",
    sim_warn_msg: "⚠ கவனம்: ஒன்று அல்லது இரண்டு அளவுகள் மாறியுள்ளன. குளத்தை கண்காணிக்கவும்.",
    sim_crit_msg: "🚨 ஆபத்து: தீவிர குறைபாடு! உடனே விசிறி இயக்கவும் அல்லது சுண்ணாம்பு இடவும்.",
    btn_reset: "↺ மீண்டும் தொடங்கு",

    checks_tag: "சென்சார் விவரங்கள்",
    checks_title: "AquaPatrol குளத்தில் எவற்றை சோதிக்கிறது?",
    checks_desc: "ஒரே கருவி மூலம் குறிப்பேடுகள் மற்றும் உடைந்த மீட்டர்களின் தொல்லை இல்லாமல் தொடர் கண்காணிப்பு.",
    check_ph_title: "pH (அமில-கார அளவு)",
    check_ph_desc: "நண்டுகள் தோல் உரித்து வளர pH 7.5 முதல் 8.5 வரை இருக்க வேண்டும்.",
    check_turb_title: "கலங்கல் தன்மை (Turbidity: 25 – 50 NTU )",
    check_turb_desc: "சூரிய ஒளி செல்லும் ஆழத்தை அளக்கிறது. 25 – 50 NTU இருப்பதே நண்டுகளுக்கு ஏற்றது.",
    check_tds_title: "TDS (கரைந்த உப்புகள்)",
    check_tds_desc: "மழை பெய்யும்போது உப்புத்தன்மை திடீரென மாறுவதால் நண்டுகளுக்கு ஏற்படும் பாதிப்பைத் தடுக்கிறது.",
    check_temp_title: "நீர் வெப்பநிலை",
    check_temp_desc: "இரவு பகல் வெப்பநிலையை (26°–32°C) கண்காணித்து நண்டுகள் சோர்வடைவதைத் தடுக்கிறது.",
    check_esp_title: "ESP32 கட்டுப்பாட்டகம்",
    check_esp_desc: "அலைகளின் இரைச்சலை நீக்கி தெளிவான அளவீட்டை வழங்குகிறது.",
    check_alerts_title: "வாட்ஸ்அப் & அழைப்பு எச்சரிக்கை",
    check_alerts_desc: "நீர் கெட்டுப்போனால் விவசாயியின் மொழியிலேயே போன் கால் மற்றும் மெசேஜ் வரும்.",

    how_title: "செயல்படும் 6 எளிய படிகள்",
    how_desc: "குளத்திலிருந்து விவசாயியின் கைக்கு: 24 மணி நேர பாதுகாப்பு.",
    step1_title: "1. குளத்தில் வைக்கவும்",
    step1_desc: "AquaPatrol கருவியை குளத்தின் கரையில் அல்லது மிதவையில் பொருத்தவும்.",
    step2_title: "2. அளவீடு செய்தல்",
    step2_desc: "pH, TDS, வெப்பநிலை, கலங்கல் தன்மை (25 – 50 NTU) தொடர்ச்சியாக அளவிடப்படும்.",
    step3_title: "3. ESP32 சரிபார்த்தல்",
    step3_desc: "அளவீடுகளை சுத்தப்படுத்தி துல்லியமான நிலையை உறுதி செய்கிறது.",
    step4_title: "4. போனுக்கு அனுப்புதல்",
    step4_desc: "வயர்லெஸ் வழியாக நிலவரம் விவசாயியின் போனுக்கு அனுப்பப்படுகிறது.",
    step5_title: "5. எச்சரிக்கை வருதல்",
    step5_desc: "அளவு மாறினால் உடனடியாக செல்போனில் எச்சரிக்கை ஒலிக்கும்.",
    step6_title: "6. நடவடிக்கை எடுத்தல்",
    step6_desc: "விவசாயி உடனே சுண்ணாம்பு இட்டு அல்லது காற்றோட்டம் செய்து நண்டுகளை காக்கலாம்.",

    why_title: "ஏன் AquaPatrol?",
    why_desc: "இரண்டு முறை பார்ப்பதற்குள் நீர் மாறக்கூடும். முன்கூட்டியே அறிவதே லாபத்தைக் காக்கும்.",
    before_title: "முன்பு (பழைய முறை)",
    before_1: "நாளுக்கு ஒருமுறை மட்டுமே கையால் அளப்பது.",
    before_2: "இரவில் ஆக்சிஜன் குறைவது தெரியாமல் போவது.",
    before_3: "நீரின் கலங்கலை கண் கணிப்பில் மட்டுமே பார்ப்பது.",
    before_4: "நண்டுகள் இறந்து மிதந்த பிறகே பிரச்சனை தெரிவது.",
    after_title: "இப்போது AquaPatrol உடன்",
    after_1: "24 மணி நேர தானியங்கி கண்காணிப்பு.",
    after_2: "கலங்கல் 25 NTU-க்கு குறைந்தாலோ 50 NTU-க்கு கூடினாலோ உடனடி எச்சரிக்கை.",
    after_3: "நேரடியாக செல்போனுக்கு செய்தி.",
    after_4: "நண்டு இறக்கும் முன் காப்பாற்றும் நல்வாய்ப்பு.",

    faq_title: "விவசாயிகள் கேட்கும் கேள்விகள்",
    faq_1_q: "குளத்தில் இன்டர்நெட் இருக்க வேண்டுமா?",
    faq_1_a: "AquaPatrol வை-பை மற்றும் சிம் கார்டு இரண்டிலும் இயங்கும். சிக்னல் இல்லையென்றாலும் தகவல்களை சேமித்து வைக்கும்.",
    faq_2_q: "கலங்கல் தன்மை 25-50 NTU ஏன் சிறந்தது?",
    faq_2_a: "நண்டு வளர்ப்பில் 25 – 50 NTU ஆழமே சிறந்த பிளாங்க்டன் சமநிலையைக் குறிக்கிறது. 25-க்கு கீழ் போனால் நீர் அதிக தெளிவாகி நண்டுகள் ஒன்றை ஒன்று கடிக்கும்; 50-க்கு மேல் போனால் சேறு செவுள்களை அடைத்து விடும்.",
    faq_3_q: "படிக்கத் தெரியாத விவசாயிகள் பயன்படுத்த முடியுமா?",
    faq_3_a: "நிச்சயமாக! இதில் பெரிய வண்ண விளக்குகள் (பச்சை, மஞ்சள், சிவப்பு) மற்றும் தமிழில் பேசும் ஆடியோ வசதி உள்ளது.",
    faq_4_q: "வெயில், மழை, சேற்றில் கருவி தாங்குமா?",
    faq_4_a: "AquaPatrol முழுமையான நீர்புகா (IP65) மற்றும் உப்பு நீர் அரிப்பைத் தாங்கும் அமைப்பில் உருவாக்கப்பட்டுள்ளது.",

    contact_title: "இன்றே உங்கள் நண்டுப் பண்ணையைப் பாதுகாத்திடுங்கள்",
    contact_desc: "எங்கள் குழுவிடம் பேசி அறிந்து கொள்ளுங்கள். சாதாரண போன் அழைப்பும் செய்யலாம்.",
    contact_call: "📞 உதவி எண்: +971 58 189 9486",
    contact_wa: "💬 வாட்ஸ்அப்: +971 58 189 9486",
    contact_email: "✉️ மின்னஞ்சல்: aquapatrol26@gmail.com",
    footer_text: "சிறந்த நீர் மேலாண்மை. ஆரோக்கிய நண்டுகள். விவசாயிகளுக்கு உயர்ந்த லாபம்.",
    copyright: "© 2026 AquaPatrol. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
  },

  ml: {
    brand_sub: "ഞണ്ട് ഫാമുകൾക്കുള്ള ലളിതമായ ജലനിരീക്ഷണം",
    nav_check: "💧 വെള്ളം പരിശോധിക്കാം",
    nav_learn: "🎬 വീഡിയോ & ഗൈഡ്",
    nav_checks: "പരിശോധിക്കുന്നവ",
    nav_how: "പ്രവർത്തനം",
    nav_why: "പ്രയോജനം",
    nav_faq: "ചോദ്യങ്ങൾ",
    btn_audio_read: "🔊 വായിച്ചു കേൾക്കൂ",
    btn_audio_stop: "⏹ നിർത്തൂ",
    hero_kicker: "🌾 കർഷകർക്കായി നിർമ്മിച്ചത് · ഇന്ത്യ",
    hero_title: "കുളത്തിലെ വെള്ളം അറിയുക. ഞണ്ടുകളെ സംരക്ഷിക്കുക.",
    hero_desc: "AquaPatrol ഒരു ചെലവ് കുറഞ്ഞ IoT ഞണ്ട് ഫാം നിരീക്ഷണ സംവിധാനമാണ്. വെള്ളത്തിന്റെ അവസ്ഥകൾ തത്സമയം പരിശോധിച്ച് നഷ്ടം വരുന്നതിന് മുൻപ് കർഷകർക്ക് മുന്നറിയിപ്പ് നൽകുന്നു.",
    btn_check_water: "💧 വെള്ളം പരിശോധിക്കാം",
    btn_watch_video: "🎬 കർഷക വീഡിയോ കാണൂ",
    stat_247: "24/7",
    stat_247_label: "തുടർച്ചയായ നിരീക്ഷണം",
    stat_sensors: "4",
    stat_sensors_label: "പ്രധാന ഘടകങ്ങൾ",
    stat_esp: "ESP32",
    stat_esp_label: "സ്മാർട്ട് ചിപ്പ്",
    stat_mud: "100%",
    stat_mud_label: "ചെളിയും ഉപ്പുവെള്ളവും പ്രതിരോധിക്കും",

    live_pond: "🌊 കുളം 01 — ലൈവ്",
    live_badge: "● ലൈവ്",
    metric_ph: "pH (അമ്ലത്വം)",
    metric_ph_range: "നല്ല പരിധി: 6.5 – 8.5",
    metric_tds: "TDS (ലവണാംശം)",
    metric_tds_range: "നല്ല പരിധി: 10k – 25k ppm",
    metric_temp: "താപനില (Temperature)",
    metric_temp_range: "നല്ല പരിധി: 26° – 32°C",
    metric_turb: "കലക്കൽ തോത് (Turbidity)",
    metric_turb_range: "ആരോഗ്യകരമായ പരിധി: 25 – 50 NTU",
    status_healthy_all: "✓ വെള്ളത്തിന്റെ അവസ്ഥ: തികച്ചും ഉത്തമം",

    vl_tag: "🌾 കർഷകർക്കായുള്ള വീഡിയോ & ചിത്ര സഹായി",
    vl_title: "വായിക്കേണ്ട ആവശ്യമില്ല. കണ്ടും കേട്ടും മനസ്സിലാക്കാം.",
    vl_desc: "ഫീൽഡ് വീഡിയോകളിലൂടെയും വർണ്ണ വെളിച്ചങ്ങളിലൂടെയും ഞണ്ടുകൾ സുരക്ഷിതരാണോ എന്ന് നിമിഷനേരം കൊണ്ട് അറിയാം.",
    v1_title: "കുളത്തിലെ സ്ഥാപനവും കർഷക ഡെമോയും",
    v1_desc: "AquaPatrol എങ്ങനെ കുളത്തിൽ ഘടിപ്പിക്കുന്നുവെന്നും മൊബൈലിൽ സന്ദേശങ്ങൾ ലഭിക്കുന്നുവെന്നും കാണുക.",
    v1_tag1: "🎥 യഥാർത്ഥ വീഡിയോ",
    v1_tag2: "🌾 ഞണ്ട് കൃഷി",
    v1_step1_title: "1. ചെളിയിലും ഉപ്പുവെള്ളത്തിലും നേരിട്ടുള്ള പരിശോധന",
    v1_step1_desc: "കുളത്തിലെ കട്ടിയുള്ള ചെളിയിൽ സെൻസറുകൾ തടസ്സമില്ലാതെ വെള്ളത്തിൽ പ്രവർത്തിക്കുന്നത് കാണുക.",
    v1_step2_title: "2. ലാബ് പരിശോധനകളുടെ ആവശ്യമില്ല",
    v1_step2_desc: "pH, TDS, താപനില, കലക്കൽ തോത് (25 – 50 NTU) എന്നിവ നിറങ്ങളുടെ സഹായത്തോടെ മൊബൈലിൽ തെളിയുന്നു.",
    v1_step3_title: "3. നഷ്ടം ഒഴിവാക്കാൻ പെട്ടെന്നുള്ള മുന്നറിയിപ്പ്",
    v1_step3_desc: "വെള്ളം മോശമായാൽ ഉടൻ അലർട്ട് വരുന്നു, ഞണ്ടുകൾ ചത്തുപോകുന്നതിന് മുൻപ് എയറേറ്റർ പ്രവർത്തിപ്പിക്കാം.",

    cue_safe_title: "🟢 പച്ച = വെള്ളം സുരക്ഷിതമാണ്",
    cue_safe_desc: "ഞണ്ടുകൾ ആരോഗ്യത്തോടെ ഭക്ഷണം കഴിക്കുന്നു.",
    cue_warn_title: "🟡 മഞ്ഞ = ശ്രദ്ധിക്കുക",
    cue_warn_desc: "കലക്കലോ pH-ഓ മാറിവരുന്നു. കുമ്മായമോ ശുദ്ധജലമോ ചേർക്കുക.",
    cue_bad_title: "🔴 ചുവപ്പ് = അപകടം! ഉടൻ പ്രവർത്തിക്കുക",
    cue_bad_desc: "ഉടൻ എയറേറ്റർ പ്രവർത്തിപ്പിക്കുക.",

    sim_title: "🌾 കുളം 01 — ജല പരിശോധന സിമുലേറ്റർ",
    sim_subtitle: "മാതൃക മാത്രം",
    sim_listen_btn: "🔊 കേൾക്കുക",
    sim_intro_title: "വെള്ളം ലളിതമായി പരിശോധിച്ച് നോക്കൂ",
    sim_intro_desc: "സ്ലൈഡറുകൾ നീക്കി അവസ്ഥകൾ മനസ്സിലാക്കാം. കലക്കൽ തോത് 25-50 NTU ആകുന്നതാണ് ഏറ്റവും നല്ലത്.",
    safe_ph_label: "നല്ല പരിധി: 6.5 – 8.5",
    safe_tds_label: "നല്ല പരിധി: 10k – 25k ppm",
    safe_temp_label: "നല്ല പരിധി: 26° – 32°C",
    safe_turb_label: "നല്ല പരിധി: 25 – 50 NTU ",
    secchi_title: "സുതാര്യത (Secchi ഡിസ്ക്)",
    secchi_disc_label: "സെക്കി ഡിസ്ക്",
    secchi_desc_opt: "✓ 25 – 50 NTU : അനുയോജ്യമായ പ്ലവകങ്ങളും സൂര്യപ്രകാശവും. ഞണ്ടുകൾ നന്നായി വളരുന്നു.",
    secchi_desc_murk: "⚠ 30 സെ.മീ-ൽ താഴെ: അമിത ചെളി / ആൽഗ! രാത്രിയിൽ ഓക്സിജൻ കുറയാൻ സാധ്യത.",
    secchi_desc_clear: "⚠ 40 സെ.മീ-ൽ കൂടുതൽ: വെള്ളം തീരെ തെളിഞ്ഞിരിക്കുന്നു! താഴെ പായൽ വളർന്ന് ഞണ്ടുകൾ തമ്മിലടിക്കും.",
    sim_healthy_msg: "✓ എല്ലാ ഘടകങ്ങളും സുരക്ഷിത പരിധിയിലാണ്. വെള്ളം ഞണ്ടുകൾക്ക് അനുയോജ്യം.",
    sim_warn_msg: "⚠ ശ്രദ്ധിക്കുക: ചില ഘടകങ്ങളിൽ വ്യത്യാസമുണ്ട്. കുളം നിരീക്ഷിക്കുക.",
    sim_crit_msg: "🚨 അപകടം: ഗുരുതരമായ വ്യതിയാനം! ഉടൻ എയറേറ്റർ ഇടുകയോ കുമ്മായം ചേർക്കുകയോ ചെയ്യുക.",
    btn_reset: "↺ വീണ്ടും ക്രമീകരിക്കുക",

    checks_tag: "സെൻസർ വിവരങ്ങൾ",
    checks_title: "AquaPatrol കുളത്തിൽ എന്തൊക്കെ പരിശോധിക്കുന്നു?",
    checks_desc: "പഴയ നോട്ട്ബുക്കുകൾക്കും ചില്ല് മീറ്ററുകൾക്കും പകരമായി വിശ്വസനീയമായ ഒരൊറ്റ ഉപകരണം.",
    check_ph_title: "pH (അമ്ല-ക്ഷാര നില)",
    check_ph_desc: "ഞണ്ടുകൾ തോട് മാറ്റുന്നതിനും വളർച്ചയ്ക്കും pH 7.5 നും 8.5 നും ഇടയിലായിരിക്കണം.",
    check_turb_title: "കലക്കൽ തോത് (Turbidity: 25 – 50 NTU )",
    check_turb_desc: "വെളിച്ചം എത്തുന്ന ആഴം അളക്കുന്നു. 25 – 50 NTU ഞണ്ടുകൾക്ക് ഏറ്റവും ഉത്തമമാണ്.",
    check_tds_title: "TDS (ലവണാംശം)",
    check_tds_desc: "മഴയ്ക്ക് ശേഷം ഉപ്പുരസത്തിലുണ്ടാകുന്ന പെട്ടെന്നുള്ള മാറ്റങ്ങൾ തടയുന്നു.",
    check_temp_title: "ജല താപനില",
    check_temp_desc: "രാപ്പകൽ താപനില വ്യതിയാനങ്ങൾ (26°–32°C) പരിശോധിച്ച് ഞണ്ടുകളുടെ സ്ട്രെസ്സ് ഒഴിവാക്കുന്നു.",
    check_esp_title: "ESP32 പ്രൊസസ്സർ",
    check_esp_desc: "ഓളങ്ങളുടെ ശബ്ദം മാറ്റി കൃത്യമായ വിവരം ലഭ്യമാക്കുന്നു.",
    check_alerts_title: "വാട്സ്ആപ്പ് & ഫോൺ അലേർട്ടുകൾ",
    check_alerts_desc: "വെള്ളം മോശമായാൽ കർഷകന് മലയാളത്തിൽ വിവരങ്ങളും ഫോൺ കോളും ലഭിക്കുന്നു.",

    how_title: "പ്രവർത്തനം — 6 ലളിത ഘട്ടങ്ങൾ",
    how_desc: "കുളത്തിൽ നിന്നും കർഷകന്റെ കൈകളിലേക്ക്: 24 മണിക്കൂർ സംരക്ഷണം.",
    step1_title: "1. കുളത്തിൽ സ്ഥാപിക്കുക",
    step1_desc: "AquaPatrol വെള്ളത്തിന് മുകളിൽ ഘടിപ്പിക്കുക. സെൻസറുകൾ വെള്ളത്തിൽ ഇറങ്ങുന്നു.",
    step2_title: "2. സെൻസർ പരിശോധന",
    step2_desc: "pH, TDS, താപനില, കലക്കൽ തോത് (25 – 50 NTU) തുടർച്ചയായി അളക്കുന്നു.",
    step3_title: "3. ESP32 ശുദ്ധീകരിക്കുന്നു",
    step3_desc: "ഓളങ്ങളുടെ വ്യതിയാനം ഒഴിവാക്കി കൃത്യമായ വിവരങ്ങൾ ശേഖരിക്കുന്നു.",
    step4_title: "4. ഫോണിലേക്ക് അയക്കുന്നു",
    step4_desc: "വയർലെസ്സ് വഴി കർഷകന്റെ മൊബൈൽ ഡാഷ്‌ബോർഡിലേക്ക് എത്തുന്നു.",
    step5_title: "5. മുന്നറിയിപ്പ് ലഭിക്കുന്നു",
    step5_desc: "പരിധി വിട്ടാൽ പെട്ടെന്ന് തന്നെ അപായ മുന്നറിയിപ്പ് എത്തുന്നു.",
    step6_title: "6. ഉടൻ പരിഹാരം",
    step6_desc: "കർഷകന് കൃത്യസമയത്ത് എയറേറ്റർ ഓൺ ചെയ്യാനോ കുമ്മായം ചേർക്കാനോ സാധിക്കുന്നു.",

    why_title: "എന്തുകൊണ്ട് AquaPatrol?",
    why_desc: "രണ്ട് സന്ദർശനങ്ങൾക്കിടയിൽ വെള്ളം മാറിപ്പോകാം. നേരത്തെ അറിയുന്നത് വലിയ നഷ്ടം ഒഴിവാക്കും.",
    before_title: "മുൻപ് (പരമ്പരാഗത രീതി)",
    before_1: "ദിവസത്തിൽ ഒരിക്കൽ മാത്രം കൈകൊണ്ട് അളക്കൽ.",
    before_2: "രാത്രിയിൽ ഓക്സിജൻ താഴുന്നത് അറിയാൻ കഴിയില്ല.",
    before_3: "വെള്ളത്തിന്റെ കലക്കൽ കണ്ട് ഊഹിക്കുക മാത്രം.",
    before_4: "ഞണ്ട് ചത്തു പൊന്തുമ്പോൾ മാത്രമാണ് പ്രശ്നം അറിയുന്നത്.",
    after_title: "ഇപ്പോൾ AquaPatrol-നൊപ്പം",
    after_1: "24 മണിക്കൂറും തുടർച്ചയായ ഓട്ടോമാറ്റിക് നിരീക്ഷണം.",
    after_2: "കലക്കൽ തോത് 25 NTU-ൽ താഴെയോ 50 NTU-ന് മുകളിലോ ആയാൽ ഉടൻ അലർട്ട്.",
    after_3: "മൊബൈലിൽ നേരിട്ട് സന്ദേശം ലഭിക്കുന്നു.",
    after_4: "ഞണ്ടുകൾ ചത്തുപോകുന്നതിന് മുൻപ് തന്നെ സംരക്ഷിക്കാം.",

    faq_title: "കർഷകരുടെ സംശയങ്ങൾ",
    faq_1_q: "കുളത്തിൽ ഇന്റർനെറ്റ് വേണമെന്നുണ്ടോ?",
    faq_1_a: "AquaPatrol വൈ-ഫൈയിലും സിം കാർഡിലും പ്രവർത്തിക്കും. റേഞ്ച് കുറവാണെങ്കിലും ഡാറ്റ നഷ്ടപ്പെടാതെ സൂക്ഷിക്കും.",
    faq_2_q: "കലക്കൽ തോത് 25-50 NTU ആയിരിക്കേണ്ടത് എന്തുകൊണ്ട്?",
    faq_2_a: "ഞണ്ട് കൃഷിയിൽ 25 – 50 NTU സുതാര്യതയാണ് ഏറ്റവും നല്ലത്. 25-ൽ താഴെ വെള്ളം തെളിഞ്ഞ് ഞണ്ടുകൾ ആക്രമിക്കും; 50-ന് മുകളിൽ ചെളി ഞണ്ടുകളുടെ ശ്വസനം തടസ്സപ്പെടുത്തും.",
    faq_3_q: "എഴുത്തും വായനയും അറിയാത്തവർക്ക് ഇത് ഉപയോഗിക്കാമോ?",
    faq_3_a: "തീർച്ചയായും! ഇതിൽ വലിയ നിറങ്ങളുള്ള ലൈറ്റുകളും (പച്ച, മഞ്ഞ, ചുവപ്പ്) മലയാളത്തിൽ സംസാരിക്കുന്ന ഓഡിയോ ബട്ടണും ഉണ്ട്.",
    faq_4_q: "വെയിലും മഴയും ചെളിയും ഇത് താങ്ങുമോ?",
    faq_4_a: "ഉപ്പുവെള്ളവും മഴയും നേരിടാൻ സാധിക്കുന്ന ഉയർന്ന നിലവാരമുള്ള വാട്ടർപ്രൂഫ് ബോഡിയിലാണ് ഇത് നിർമ്മിച്ചിട്ടുള്ളത്.",

    contact_title: "ഞണ്ട് ഫാം ഇന്ന് തന്നെ സുരക്ഷിതമാക്കൂ",
    contact_desc: "കൂടുതൽ അറിയാൻ ഞങ്ങളുടെ ടീമുമായി സംസാരിക്കൂ. ഫോൺ കാൾ വഴിയും ബന്ധപ്പെടാം.",
    contact_call: "📞 ഹെൽപ്പ് ലൈൻ: +971 58 189 9486",
    contact_wa: "💬 വാട്സ്ആപ്പ്: +971 58 189 9486",
    contact_email: "✉️ ഇമെയിൽ: aquapatrol26@gmail.com",
    footer_text: "മികച്ച ജലപരിപാലനം. ആരോഗ്യകരമായ ഞണ്ടുകൾ. കർഷകർക്ക് മികച്ച വരുമാനം.",
    copyright: "© 2026 AquaPatrol. സർവ്വ അവകാശങ്ങളും നിക്ഷിപ്തം."
  },

  gu: {
    brand_sub: "કરચલા ફાર્મ માટે સરળ જળ નિરીક્ષણ",
    nav_check: "💧 પાણી તપાસો",
    nav_learn: "🎬 વિડીયો અને ગાઇડ",
    nav_checks: "શું તપાસે છે",
    nav_how: "કેવી રીતે કામ કરે છે",
    nav_why: "શા માટે વાપરવું",
    nav_faq: "પ્રશ્નો",
    btn_audio_read: "🔊 સાંભળો",
    btn_audio_stop: "⏹ બંધ કરો",
    hero_kicker: "🌾 ખેડૂતો માટે નિર્મિત · ભારત",
    hero_title: "તળાવના પાણીને ઓળખો. તમારા કરચલાઓનું રક્ષણ કરો.",
    hero_desc: "AquaPatrol એ કરચલા ફાર્મ માટે એક સસ્તું IoT નિરીક્ષણ ઉપકરણ છે. તે વાસ્તવિક સમયમાં પાણીની સ્થિતિ તપાસે છે અને નુકસાન થાય તે પહેલાં ખેડૂતને ચેતવે છે.",
    btn_check_water: "💧 તળાવનું પાણી તપાસો",
    btn_watch_video: "🎬 ખેડૂત વિડીયો જુઓ",
    stat_247: "24/7",
    stat_247_label: "સતત રીડિંગ્સ",
    stat_sensors: "4",
    stat_sensors_label: "મુખ્ય પરિમાણો",
    stat_esp: "ESP32",
    stat_esp_label: "સ્માર્ટ ચિપ",
    stat_mud: "100%",
    stat_mud_label: "કાદવ અને ખારા પાણી સામે સુરક્ષિત",

    live_pond: "🌊 તળાવ 01 — લાઈવ",
    live_badge: "● લાઈવ",
    metric_ph: "pH (એસિડિટી)",
    metric_ph_range: "યોગ્ય: 6.5 – 8.5",
    metric_tds: "TDS (ક્ષારતા)",
    metric_tds_range: "યોગ્ય શ્રેણી: 10k – 25k ppm",
    metric_temp: "તાપમાન (Temp)",
    metric_temp_range: "યોગ્ય: 26° – 32°C",
    metric_turb: "ડોળાશ / પારદર્શિતા (Turbidity)",
    metric_turb_range: "તંદુરસ્ત શ્રેણી: 25 – 50 NTU",
    status_healthy_all: "✓ પાણીની સ્થિતિ: તદ્દન તંદુરસ્ત",

    vl_tag: "🌾 ખેડૂત વિઝ્યુઅલ અને વિડીયો ગાઈડ",
    vl_title: "વાંચવાની જરૂર નથી. જોઈને અને સાંભળીને સમજો.",
    vl_desc: "ખેડૂતોની સુવિધા માટે વિડીયો અને રંગીન બત્તીઓ દ્વારા કરચલાઓની સલામતી તરત જાણી શકાય છે.",
    v1_title: "તળાવમાં ગોઠવણી અને ખેડૂત ડેમો",
    v1_desc: "AquaPatrol કેવી રીતે પાણીમાં મુકાય છે અને ફોનમાં કેવી રીતે એલર્ટ આપે છે તે જુઓ.",
    v1_tag1: "🎥 વાસ્તવિક ખેતરનો વિડીયો",
    v1_tag2: "🌾 કરચલા ઉછેર",
    v1_step1_title: "1. કાદવ અને ખારા પાણીમાં વાસ્તવિક ચકાસણી",
    v1_step1_desc: "દરિયાકાંઠાના તળાવના કાદવમાં સેન્સર ચોંટ્યા વિના કેવી રીતે કામ કરે છે તે જુઓ.",
    v1_step2_title: "2. લેબ ટેસ્ટિંગની કોઈ જરૂર નથી",
    v1_step2_desc: "pH, TDS, તાપમાન અને પારદર્શિતા (25 – 50 NTU) સ્પષ્ટ રંગ સંકેતો સાથે સીધા મોબાઇલ પર દેખાય છે.",
    v1_step3_title: "3. પાક બચાવવા માટે તાત્કાલિક ચેતવણી",
    v1_step3_desc: "પાણી બગડતાં જ તાત્કાલિક એલર્ટ આવે છે જેથી કરચલા મરે તે પહેલાં પંખો ચાલુ કરી શકાય.",

    cue_safe_title: "🟢 લીલો રંગ = પાણી સુરક્ષિત છે",
    cue_safe_desc: "કરચલા તંદુરસ્ત છે અને ખોરાક લે છે.",
    cue_warn_title: "🟡 પીળો રંગ = પાણી પર ધ્યાન આપો",
    cue_warn_desc: "ડોળાશ અથવા pH બદલાઈ રહ્યું છે. ચૂનો અથવા તાજું પાણી ઉમેરો.",
    cue_bad_title: "🔴 લાલ રંગ = જોખમ! તાત્કાલિક પગલાં લો",
    cue_bad_desc: "તરત જ એરેટર (પંખો) ચાલુ કરો.",

    sim_title: "🌾 તળાવ 01 — જળ સિમ્યુલેટર",
    sim_subtitle: "માત્ર ડેમો",
    sim_listen_btn: "🔊 અવાજ સાંભળો",
    sim_intro_title: "સરળ રીતે પાણી તપાસો",
    sim_intro_desc: "સ્લાઇડર ખસેડીને જુઓ. પારદર્શિતા 25-50 NTU હોવી સૌથી શ્રેષ્ઠ છે.",
    safe_ph_label: "યોગ્ય: 6.5 – 8.5",
    safe_tds_label: "યોગ્ય: 10k – 25k ppm",
    safe_temp_label: "યોગ્ય: 26° – 32°C",
    safe_turb_label: "યોગ્ય: 25 – 50 NTU ",
    secchi_title: "પાણીની પારદર્શિતા (Secchi ડિસ્ક)",
    secchi_disc_label: "સેક્કી ડિસ્ક",
    secchi_desc_opt: "✓ 25 – 50 NTU : ઉત્તમ સૂર્યપ્રકાશ અને પ્લેન્કટોન. કરચલા ખૂબ વધે છે.",
    secchi_desc_murk: "⚠ 30 સેમીથી ઓછું: ખૂબ કાદવવાળું! રાત્રે ઓક્સિજન ઘટી જવાનો ભય.",
    secchi_desc_clear: "⚠ 40 સેમીથી વધુ: પાણી ખૂબ ચોખ્ખું છે! તળિયે શેવાળ થશે અને કરચલા એકબીજાને ખાશે.",
    sim_healthy_msg: "✓ બધા પરિમાણો યોગ્ય મર્યાદામાં છે. પાણી કરચલા માટે સલામત છે.",
    sim_warn_msg: "⚠ ધ્યાન આપો: અમુક પરિમાણો બદલાયા છે. તળાવ પર નજર રાખો.",
    sim_crit_msg: "🚨 ભય: ગંભીર ખામી! તરત જ પંખો ચાલુ કરો અથવા ચૂનો નાખો.",
    btn_reset: "↺ ફરી સેટ કરો",

    checks_tag: "સેન્સર વિગત",
    checks_title: "AquaPatrol તળાવમાં શું તપાસે છે?",
    checks_desc: "એક જ મજબૂત ઉપકરણ કાચના મીટર અને જૂની ડાયરીઓની ઝંઝટમાંથી મુક્તિ આપે છે.",
    check_ph_title: "pH (એસિડ-આલ્કલી સંતુલન)",
    check_ph_desc: "કરચલાના કવચ બદલવા અને વૃદ્ધિ માટે pH 7.5 થી 8.5 હોવું જરૂરી છે.",
    check_turb_title: "ડોળાશ / પારદર્શિતા (Turbidity: 25 – 50 NTU )",
    check_turb_desc: "સૂર્યપ્રકાશ પહોંચવાની ઊંડાઈ માપે છે. 25 – 50 NTU સૌથી અનુકૂળ છે.",
    check_tds_title: "TDS (ઓગળેલ ક્ષાર)",
    check_tds_desc: "વરસાદ પછી પાણીના ક્ષારમાં અચાનક થતા ફેરફારથી કરચલાઓને બચાવે છે.",
    check_temp_title: "પાણીનું તાપમાન",
    check_temp_desc: "દિવસ-રાતના તાપમાન (26°–32°C) પર નજર રાખે છે જેથી કરચલાઓને તણાવ ન થાય.",
    check_esp_title: "ESP32 સ્માર્ટ પ્રોસેસર",
    check_esp_desc: "મોજાંઓના અવાજને દૂર કરીને ચોક્કસ રીડિંગ ખેડૂત સુધી પહોંચાડે છે.",
    check_alerts_title: "વોટ્સએપ અને ફોન ચેતવણી",
    check_alerts_desc: "પાણી બગડે ત્યારે ખેડૂતની ભાષામાં સીધો મેસેજ અને ફોન કોલ આવે છે.",

    how_title: "કેવી રીતે કામ કરે છે — 6 સરળ પગલાં",
    how_desc: "તળાવથી ખેડૂતના હાથ સુધી: 24 કલાક રક્ષણ.",
    step1_title: "1. તળાવ કિનારે ગોઠવો",
    step1_desc: "AquaPatrol ને પાણી ઉપર લગાવો. વાયર પાણીમાં ઉતરે છે.",
    step2_title: "2. સેન્સર માપે છે",
    step2_desc: "pH, TDS, તાપમાન અને પારદર્શિતા (25 – 50 NTU) સતત માપે છે.",
    step3_title: "3. ESP32 તપાસે છે",
    step3_desc: "રીડિંગ્સને સ્થિર અને ચોક્કસ બનાવે છે.",
    step4_title: "4. ફોન પર મોકલે છે",
    step4_desc: "વાયરલેસ દ્વારા ડેટા ખેડૂતના મોબાઇલમાં પહોંચે છે.",
    step5_title: "5. એલર્ટ મળે છે",
    step5_desc: "મર્યાદા બહાર જાય તો તરત જ લાલ કે પીળી ચેતવણી મળે છે.",
    step6_title: "6. તાત્કાલિક ઉકેલ",
    step6_desc: "ખેડૂત સમયસર ચૂનો નાખીને કે પંખો ચલાવીને નુકસાન અટકાવી શકે છે.",

    why_title: "શા માટે AquaPatrol?",
    why_desc: "બે મુલાકાત વચ્ચે પાણી ગમે ત્યારે બગડી શકે છે. વહેલા જાણવું એ જ નફો બચાવે છે.",
    before_title: "પહેલાં (જૂની રીત)",
    before_1: "દિવસમાં માત્ર એક જ વાર હાથથી માપવું.",
    before_2: "રાત્રે ઓક્સિજન ઓછો થાય તો ખબર ન પડતી.",
    before_3: "પાણીની સ્વચ્છતા માત્ર આંખે જોઈને અંદાજ લગાવાતો.",
    before_4: "કરચલા મરીને તરતા ત્યારે જ ખબર પડતી.",
    after_title: "હવે AquaPatrol સાથે",
    after_1: "24 કલાક સતત ઓટોમેટિક નિરીક્ષણ.",
    after_2: "પારદર્શિતા 25 NTU થી ઘટે કે 50 NTU થી વધે ત્યારે તાત્કાલિક એલર્ટ.",
    after_3: "મોબાઇલમાં સીધો મેસેજ.",
    after_4: "કરચલા મરતા પહેલાં જ બચાવવાની તક.",

    faq_title: "ખેડૂતોના સામાન્ય પ્રશ્નો",
    faq_1_q: "શું તળાવ પર ઇન્ટરનેટ હોવું જરૂરી છે?",
    faq_1_a: "AquaPatrol વાઇ-ફાઇ અને સિમ કાર્ડ બંને પર કામ કરે છે. સિગ્નલ નબળું હોય તો પણ ડેટા સચવાય છે.",
    faq_2_q: "ડોળાશ 25-50 NTU શા માટે શ્રેષ્ઠ છે?",
    faq_2_a: "કરચલા ઉછેરમાં 25 – 50 NTU પારદર્શિતા સૌથી શ્રેષ્ઠ સંતુલન દર્શાવે છે. 25 થી ઓછું હોય તો કરચલા એકબીજાને મારે છે; 50 થી વધુ હોય તો કાદવ ચૂઈમાં ભરાઈને શ્વાસ રુંધે છે.",
    faq_3_q: "શું અભણ ખેડૂતો આનો ઉપયોગ કરી શકે?",
    faq_3_a: "હા! આમાં મોટા રંગીન સંકેતો (લીલો, પીળો, લાલ) અને બોલીને સંભળાવતું ઓડિયો બટન આપેલું છે.",
    faq_4_q: "શું આ સાધન તડકો, વરસાદ અને કાદવ સહન કરશે?",
    faq_4_a: "AquaPatrol સંપૂર્ણ વોટરપ્રૂફ અને ખારા પાણી સામે ટકી શકે તેવી મજબૂત બોડી સાથે બનેલું છે.",

    contact_title: "આજે જ તમારા કરચલા ફાર્મને સુરક્ષિત કરો",
    contact_desc: "અમારી ટીમ સાથે વાત કરો. સાદા ફોન પર પણ વાત કરી શકો છો.",
    contact_call: "📞 હેલ્પલાઇન: +971 58 189 9486",
    contact_wa: "💬 વોટ્સએપ: +971 58 189 9486",
    contact_email: "✉️ ઇમેઇલ: aquapatrol26@gmail.com",
    footer_text: "સ્માર્ટ પાણી વ્યવસ્થાપન. તંદુરસ્ત કરચલા. ભારતીય ખેડૂતની પ્રગતિ.",
    copyright: "© 2026 AquaPatrol. સર્વાધિકાર સુરક્ષિત."
  },

  bn: {
    brand_sub: "কাঁকড়া খামারের সহজ জল পর্যবেক্ষণ ব্যবস্থা",
    nav_check: "💧 জল পরীক্ষা করুন",
    nav_learn: "🎬 ভিডিও ও গাইড",
    nav_checks: "কী কী পরীক্ষা করে",
    nav_how: "কীভাবে কাজ করে",
    nav_why: "কেন ব্যবহার করবেন",
    nav_faq: "প্রশ্নোত্তর",
    btn_audio_read: "🔊 শুনে নিন",
    btn_audio_stop: "⏹ বন্ধ করুন",
    hero_kicker: "🌾 চাষীদের জন্য তৈরি · ভারত ও এশিয়া",
    hero_title: "আপনার পুকুরের জল জানুন। কাঁকড়া বাঁচান।",
    hero_desc: "AquaPatrol হলো একটি সাশ্রয়ী IoT কাঁকড়া খামার পর্যবেক্ষণ ব্যবস্থা। এটি রিয়েল-টাইমে জলের অবস্থা পরীক্ষা করে এবং কাঁকড়া মারা যাওয়ার আগেই চাষীদের সতর্ক করে।",
    btn_check_water: "💧 পুকুরের জল পরীক্ষা করুন",
    btn_watch_video: "🎬 চাষীর ভিডিও দেখুন",
    stat_247: "24/7",
    stat_247_label: "সার্বক্ষণিক নজরদারি",
    stat_sensors: "4",
    stat_sensors_label: "প্রধান মাপকাঠি",
    stat_esp: "ESP32",
    stat_esp_label: "স্মার্ট চিপ",
    stat_mud: "100%",
    stat_mud_label: "কাদা ও নোনা জল প্রতিরোধী",

    live_pond: "🌊 পুকুর 01 — লাইভ",
    live_badge: "● লাইভ",
    metric_ph: "pH (অম্লত্ব)",
    metric_ph_range: "সঠিক মাত্রা: 6.5 – 8.5",
    metric_tds: "TDS (লবণাক্ততা)",
    metric_tds_range: "সঠিক মাত্রা: 10k – 25k ppm",
    metric_temp: "তাপমাত্রা (Temperature)",
    metric_temp_range: "সঠিক মাত্রা: 26° – 32°C",
    metric_turb: "জলের ঘোলাটে ভাব (Turbidity)",
    metric_turb_range: "উপযুক্ত মাত্রা: 25 – 50 NTU",
    status_healthy_all: "✓ জলের অবস্থা: সম্পূর্ণ স্বাস্থ্যকর",

    vl_tag: "🌾 চাষীদের জন্য ভিডিও ও চিত্র গাইড",
    vl_title: "পড়ার কোনো দরকার নেই। দেখে ও শুনে বুঝে নিন।",
    vl_desc: "সহজ চাষী ভাইদের জন্য বিশেষ ভিডিও এবং রঙিন আলোর মাধ্যমে কাঁকড়ার সুরক্ষা সহজেই জানা যায়।",
    v1_title: "পুকুরে স্থাপন ও মাঠ পর্যায়ের ভিডিও",
    v1_desc: "AquaPatrol কীভাবে পুকুরে লাগানো হয় এবং মোবাইলে কীভাবে সতর্কতা পাঠায় তা দেখুন।",
    v1_tag1: "🎥 আসল মাঠের ভিডিও",
    v1_tag2: "🌾 কাঁকড়া চাষ",
    v1_step1_title: "1. আসল কাদা ও নোনা জলে সরাসরি পরীক্ষা",
    v1_step1_desc: "দেখুন কীভাবে সেন্সরগুলো কোনো জট ছাড়াই সরাসরি পুকুরের কাদাজলে কাজ করে।",
    v1_step2_title: "2. ল্যাব টেস্টের কোনো ঝামেলা নেই",
    v1_step2_desc: "pH, TDS, তাপমাত্রা ও স্বচ্ছতা (25 – 50 NTU) সরাসরি মোবাইল স্ক্রিনে পরিষ্কার রঙে দেখা যায়।",
    v1_step3_title: "3. ফসল বাঁচাতে তাৎক্ষণিক সতর্কবার্তা",
    v1_step3_desc: "জল খারাপ হতেই অ্যালার্ম বেজে ওঠে যাতে কাঁকড়া মরার আগেই এরেটর চালানো যায়।",

    cue_safe_title: "🟢 সবুজ আলো = জল নিরাপদ",
    cue_safe_desc: "কাঁকড়া সুস্থ আছে এবং খাবার খাচ্ছে।",
    cue_warn_title: "🟡 হলুদ আলো = জল পরীক্ষা করুন",
    cue_warn_desc: "ঘোলাটে ভাব বা pH পরিবর্তন হচ্ছে। চুন বা মিষ্টি জল দিন।",
    cue_bad_title: "🔴 লাল আলো = বিপদ! অবিলম্বে ব্যবস্থা নিন",
    cue_bad_desc: "অবিলম্বে প্যাডেল এরেটর চালু করুন।",

    sim_title: "🌾 পুকুর 01 — জল সিমুলেটর",
    sim_subtitle: "শুধুমাত্র নমুনা",
    sim_listen_btn: "🔊 মুখে শুনুন",
    sim_intro_title: "সহজ উপায়ে জল পরীক্ষা করে দেখুন",
    sim_intro_desc: "স্লাইডার সরিয়ে জলের অবস্থা দেখুন। ঘোলাটে ভাব 25-50 NTU থাকা সবচেয়ে ভালো।",
    safe_ph_label: "সঠিক মাত্রা: 6.5 – 8.5",
    safe_tds_label: "সঠিক মাত্রা: 10k – 25k ppm",
    safe_temp_label: "সঠিক মাত্রা: 26° – 32°C",
    safe_turb_label: "সঠিক মাত্রা: 25 – 50 NTU ",
    secchi_title: "জলের স্বচ্ছতা (Secchi ডিস্ক)",
    secchi_disc_label: "সেক্কি ডিস্ক",
    secchi_desc_opt: "✓ 25 – 50 NTU : কাঁকড়ার জন্য নিখুঁত প্ল্যাঙ্কটন ও সূর্যালোক। দ্রুত বৃদ্ধি পায়।",
    secchi_desc_murk: "⚠ 30 সেমির কম: অতিরিক্ত কাদা / শৈবাল! রাতে অক্সিজেন কমে যাওয়ার মারাত্মক ঝুঁকি।",
    secchi_desc_clear: "⚠ 40 সেমির বেশি: জল খুব পরিষ্কার! নিচে আগাছা জন্মাবে এবং কাঁকড়া একে অপরকে কামড়াবে।",
    sim_healthy_msg: "✓ সমস্ত পরিমাপ সঠিক মাত্রায় আছে। জল কাঁকড়ার জন্য নিরাপদ।",
    sim_warn_msg: "⚠ সতর্কতা: এক বা একাধিক পরিমাপ পরিবর্তিত হয়েছে। পুকুর লক্ষ্য করুন।",
    sim_crit_msg: "🚨 মহাবিপদ! কাঁকড়া মারা যেতে পারে। এখনই এরেটর চালান বা চুন দিন।",
    btn_reset: "↺ পুনরায় সেট করুন",

    checks_tag: "সেন্সর বিবরণ",
    checks_title: "AquaPatrol পুকুরে কী কী পরীক্ষা করে?",
    checks_desc: "একটিমাত্র মজবুত যন্ত্র পুরোনো খাতা এবং কাচের মিটারের ঝামেলা দূর করে।",
    check_ph_title: "pH (অম্ল ও ক্ষারীয় মান)",
    check_ph_desc: "কাঁকড়ার খোলস পরিবর্তন ও শারীরিক বৃদ্ধির জন্য pH 7.5 থেকে 8.5 জরুরি।",
    check_turb_title: "ঘোলাটে ভাব (Turbidity: 25 – 50 NTU )",
    check_turb_desc: "সূর্যালোক প্রবেশের গভীরতা মাপে। 25 – 50 NTU কাঁকড়ার জন্য সবচেয়ে আদর্শ।",
    check_tds_title: "TDS (দ্রবীভূত খনিজ ও লবণ)",
    check_tds_desc: "বৃষ্টির পর জলের লবণাক্ততায় হঠাৎ পরিবর্তনের ঝুঁকি রোধ করে।",
    check_temp_title: "জলের তাপমাত্রা",
    check_temp_desc: "দিন ও রাতের তাপমাত্রা (26°–32°C) নজরদারি করে যাতে কাঁকড়ার খিদে না কমে।",
    check_esp_title: "ESP32 স্মার্ট প্রসেসর",
    check_esp_desc: "ঢেউয়ের ওঠানামা দূর করে চাষীর কাছে সঠিক রিডিং পৌঁছে দেয়।",
    check_alerts_title: "হোয়াটসঅ্যাপ ও ফোন কল সতর্কতা",
    check_alerts_desc: "জল খারাপ হলে চাষীর নিজের ভাষায় সরাসরি ফোনে কল ও মেসেজ আসে।",

    how_title: "কীভাবে কাজ করে — 6টি সহজ ধাপ",
    how_desc: "পুকুর থেকে চাষীর হাতে: 24 ঘণ্টা অবিরাম সুরক্ষা।",
    step1_title: "1. পুকুরে বসান",
    step1_desc: "AquaPatrol পুকুরের পাড়ে বা ভাসমান খাঁচায় রাখুন। সেন্সর জলে ডুবে থাকবে।",
    step2_title: "2. সেন্সর পরিমাপ করে",
    step2_desc: "pH, TDS, তাপমাত্রা ও ঘোলাটে ভাব (25 – 50 NTU) পরিমাপ করে।",
    step3_title: "3. ESP32 যাচাই করে",
    step3_desc: "সঠিক রিডিং ফিল্টার করে প্রস্তুত করে।",
    step4_title: "4. মোবাইলে পাঠায়",
    step4_desc: "তারহীন প্রযুক্তির মাধ্যমে তথ্য চাষীর ফোনে পৌঁছে যায়।",
    step5_title: "5. সতর্কতা সংকেত",
    step5_desc: "মাত্রা ছাড়ালে সঙ্গে সঙ্গে সতর্কবার্তা আসে।",
    step6_title: "6. দ্রুত সমাধান",
    step6_desc: "চাষী সময়মতো চুন দিয়ে বা এরেটর চালিয়ে কাঁকড়া রক্ষা করতে পারেন।",

    why_title: "AquaPatrol কেন প্রয়োজন?",
    why_desc: "পুকুর পরিদর্শনের মাঝের সময়েও জল বদলে যেতে পারে। আগে জানাই লাভ বাঁচায়।",
    before_title: "আগে (সাধারণ পদ্ধতি)",
    before_1: "দিনে কেবল একবার হাতে মেপে দেখা।",
    before_2: "রাতে অক্সিজেন কমলে জানার উপায় ছিল না।",
    before_3: "জলের ঘোলা ভাব চোখের আন্দাজে দেখা হতো।",
    before_4: "কাঁকড়া মরে ভেসে উঠলে তবেই সমস্যা ধরা পড়ত।",
    after_title: "এখন AquaPatrol এর সাথে",
    after_1: "24 ঘণ্টা সার্বক্ষণিক স্বয়ংক্রিয় নজরদারি।",
    after_2: "ঘোলা ভাব 25 NTU এর নিচে বা 50 NTU এর বেশি হলেই সতর্কতা।",
    after_3: "সরাসরি মোবাইলে বার্তা ও কল।",
    after_4: "কাঁকড়া মরার আগেই বাঁচানোর নিশ্চিত সুযোগ।",

    faq_title: "চাষীদের সাধারণ প্রশ্ন",
    faq_1_q: "পুকুরে কি ইন্টারনেট থাকা বাধ্যতামূলক?",
    faq_1_a: "AquaPatrol ওয়াই-ফাই এবং সিম কার্ড দুটোতেই চলে। নেটওয়ার্ক দুর্বল হলেও এটি ডাটা সংরক্ষণ করে রাখে।",
    faq_2_q: "জলের ঘোলাটে ভাব 25-50 NTU কেন সঠিক?",
    faq_2_a: "কাঁকড়া চাষে 25 – 50 NTU স্বচ্ছতা (Secchi depth) সবচেয়ে ভালো। 25 এর কম হলে জল খুব স্বচ্ছ হয়ে কাঁকড়া একে অপরকে আক্রমণ করে; 50 এর বেশি হলে কাঁকড়ার ফুলকা বন্ধ হয়ে যায়।",
    faq_3_q: "নিরক্ষর চাষীরা কি এটি ব্যবহার করতে পারবেন?",
    faq_3_a: "হ্যাঁ! এতে বড় রঙিন আলো (সবুজ, হলুদ, লাল) এবং বাংলায় কথা বলার অডিও বোতাম রয়েছে।",
    faq_4_q: "রোদ, বৃষ্টি এবং কাদায় যন্ত্রটি কি টিকবে?",
    faq_4_a: "AquaPatrol সম্পূর্ণ ওয়াটারপ্রুফ এবং নোনা জল প্রতিরোধী মজবুত বডিতে তৈরি।",

    contact_title: "আজই আপনার কাঁকড়া খামার সুরক্ষিত করুন",
    contact_desc: "আমাদের টিমের সাথে কথা বলুন। সাধারণ ফোন কল করেও জানতে পারেন।",
    contact_call: "📞 হেল্পলাইন: +971 58 189 9486",
    contact_wa: "💬 হোয়াটসঅ্যাপ: +971 58 189 9486",
    contact_email: "✉️ ইমেল: aquapatrol26@gmail.com",
    footer_text: "স্মার্ট জল ব্যবস্থাপনা। স্বাস্থ্যকর কাঁকড়া। ভারতীয় চাষীদের সমৃদ্ধি।",
    copyright: "© 2026 AquaPatrol. সর্বস্বত্ব সংরক্ষিত।"
  },

  or: {
    brand_sub: "କଙ୍କଡ଼ା ଚାଷ ପାଇଁ ସରଳ ଜଳ ନିରୀକ୍ଷଣ",
    nav_check: "💧 ଜଳ ପରୀକ୍ଷା",
    nav_learn: "🎬 ଭିଡିଓ ଓ ଗାଇଡ୍",
    nav_checks: "କ'ଣ ଯାଞ୍ଚ କରେ",
    nav_how: "କିପରି କାମ କରେ",
    nav_why: "କାହିଁକି ବ୍ୟବହାର କରିବେ",
    nav_faq: "ପ୍ରଶ୍ନୋତ୍ତର",
    btn_audio_read: "🔊 ଶୁଣନ୍ତୁ",
    btn_audio_stop: "⏹ ବନ୍ଦ କରନ୍ତୁ",
    hero_kicker: "🌾 ଚାଷୀଙ୍କ ପାଇଁ ନିର୍ମିତ · ଭାରତ",
    hero_title: "ପୋଖରୀ ଜଳକୁ ଜାଣନ୍ତୁ। କଙ୍କଡ଼ାଙ୍କୁ ସୁରକ୍ଷିତ ରଖନ୍ତୁ।",
    hero_desc: "AquaPatrol ହେଉଛି ଏକ ସୁଲଭ IoT-ଚାଳିତ କଙ୍କଡ଼ା ଚାଷ ନିରୀକ୍ଷଣ ପ୍ରଣାଳୀ। ଏହା ପ୍ରକୃତ ସମୟରେ ଜଳର ଅବସ୍ଥା ଯାଞ୍ଚ କରେ ଏବଂ କ୍ଷତି ହେବା ପୂର୍ବରୁ ଚାଷୀଙ୍କୁ ସତର୍କ କରେ।",
    btn_check_water: "💧 ପୋଖରୀ ଜଳ ଯାଞ୍ଚ କରନ୍ତୁ",
    btn_watch_video: "🎬 ଚାଷୀ ଭିଡିଓ ଦେଖନ୍ତୁ",
    stat_247: "24/7",
    stat_247_label: "ନିରନ୍ତର ରିଡିଂ",
    stat_sensors: "4",
    stat_sensors_label: "ମୁଖ୍ୟ ମାନଦଣ୍ଡ",
    stat_esp: "ESP32",
    stat_esp_label: "ସ୍ମାର୍ଟ ଚିପ୍",
    stat_mud: "100%",
    stat_mud_label: "କାଦୁଅ ଓ ଲୁଣିଆ ପାଣି ସହନଶୀଳ",

    live_pond: "🌊 ପୋଖରୀ 01 — ଲାଇଭ୍",
    live_badge: "● ଲାଇଭ୍",
    metric_ph: "pH (ଅମ୍ଳତା)",
    metric_ph_range: "ଉପଯୁକ୍ତ: 6.5 – 8.5",
    metric_tds: "TDS (ଲବଣାକ୍ତତା)",
    metric_tds_range: "ଉପଯୁକ୍ତ: 10k – 25k ppm",
    metric_temp: "ତାପମାତ୍ରା (Temperature)",
    metric_temp_range: "ଉପଯୁକ୍ତ: 26° – 32°C",
    metric_turb: "ପାଣିର ଘୋଳିଆପଣ (Turbidity)",
    metric_turb_range: "ଉପଯୁକ୍ତ ମାତ୍ରା: 25 – 50 NTU",
    status_healthy_all: "✓ ଜଳର ଅବସ୍ଥା: ସମ୍ପୂର୍ଣ୍ଣ ସୁରକ୍ଷିତ",

    vl_tag: "🌾 ଚାଷୀଙ୍କ ପାଇଁ ଭିଡିଓ ଏବଂ ଚିତ୍ର ଗାଇଡ୍",
    vl_title: "ପଢ଼ିବା ଦରକାର ନାହିଁ। ଦେଖି ଏବଂ ଶୁଣି ବୁଝନ୍ତୁ।",
    vl_desc: "ସରଳ ଚାଷୀ ଭାଇମାନଙ୍କ ପାଇଁ ପ୍ରକୃତ ପୋଖରୀ ଭିଡିଓ ଏବଂ ରଙ୍ଗୀନ ଆଲୋକ ମାଧ୍ୟମରେ କଙ୍କଡ଼ା ସୁରକ୍ଷା ଜାଣିବା ସହଜ।",
    v1_title: "ପୋଖରୀରେ ସ୍ଥାପନ ଓ ଚାଷୀ ଡେମୋ",
    v1_desc: "AquaPatrol କିପରି ପୋଖରୀରେ ଲଗାଯାଏ ଏବଂ ମୋବାଇଲରେ ସତର୍କତା ଆସେ ତାହା ଦେଖନ୍ତୁ।",
    v1_tag1: "🎥 ପ୍ରକୃତ ପୋଖରୀ ଭିଡିଓ",
    v1_tag2: "🌾 କଙ୍କଡ଼ା ଚାଷ",
    v1_step1_title: "1. କାଦୁଅ ଓ ଲୁଣିଆ ପାଣିରେ ପ୍ରକୃତ ପରୀକ୍ଷା",
    v1_step1_desc: "ଦେଖନ୍ତୁ କିପରି ସେନସରଗୁଡ଼ିକ ବିନା ଅଟକି ସିଧାସଳଖ ପୋଖରୀ କାଦୁଅରେ କାମ କରୁଛି।",
    v1_step2_title: "2. କୌଣସି ଲ୍ୟାବ୍ ଯାଞ୍ଚର ଆବଶ୍ୟକତା ନାହିଁ",
    v1_step2_desc: "pH, TDS, ତାପମାତ୍ରା ଓ ଘୋଳିଆପଣ (25 – 50 NTU) ସ୍ପଷ୍ଟ ରଙ୍ଗ ସହିତ ସିଧାସଳଖ ମୋବାଇଲରେ ଦେଖାଯାଏ।",
    v1_step3_title: "3. ଫସଲ ବଞ୍ଚାଇବା ପାଇଁ ତୁରନ୍ତ ସତର୍କତା",
    v1_step3_desc: "ପାଣି ଖରାପ ହେବା ମାତ୍ରେ ଆଲର୍ଟ ଆସେ, ଯାହାଦ୍ୱାରା କଙ୍କଡ଼ା ମରିବା ପୂର୍ବରୁ ଫ୍ୟାନ୍ ଚଲାଇହୁଏ।",

    cue_safe_title: "🟢 ସବୁଜ = ପାଣି ସୁରକ୍ଷିତ ଅଛି",
    cue_safe_desc: "କଙ୍କଡ଼ା ଭଲ ଭାବେ ଖାଉଛନ୍ତି ଏବଂ ସୁସ୍ଥ ଅଛନ୍ତି।",
    cue_warn_title: "🟡 ହଳଦିଆ = ପାଣି ଉପରେ ଧ୍ୟାନ ଦିଅନ୍ତୁ",
    cue_warn_desc: "ଘୋଳିଆପଣ ବା pH ବଦଳୁଛି। ଚୂନ କିମ୍ବା ମଧୁର ଜଳ ଦିଅନ୍ତୁ।",
    cue_bad_title: "🔴 ଲାଲ୍ = ବିପଦ! ତୁରନ୍ତ ପଦକ୍ଷେପ ନିଅନ୍ତୁ",
    cue_bad_desc: "ତୁରନ୍ତ ଏରେଟର ଫ୍ୟାନ୍ ଚଲାନ୍ତୁ।",

    sim_title: "🌾 ପୋଖରୀ 01 — ଜଳ ସିମ୍ୟୁଲେଟର",
    sim_subtitle: "କେବଳ ନମୁନା",
    sim_listen_btn: "🔊 କଥାରେ ଶୁଣନ୍ତୁ",
    sim_intro_title: "ସହଜ ଉପାୟରେ ପାଣି ଯାଞ୍ଚ କରନ୍ତୁ",
    sim_intro_desc: "ସ୍ଲାଇଡର ଘୁଞ୍ଚାଇ ପାଣିର ଅବସ୍ଥା ଦେଖନ୍ତୁ। ଘୋଳିଆପଣ 25-50 NTU ରହିବା ସବୁଠାରୁ ଭଲ।",
    safe_ph_label: "ଉପଯୁକ୍ତ: 6.5 – 8.5",
    safe_tds_label: "ଉପଯୁକ୍ତ: 10k – 25k ppm",
    safe_temp_label: "ଉପଯୁକ୍ତ: 26° – 32°C",
    safe_turb_label: "ଉପଯୁକ୍ତ: 25 – 50 NTU ",
    secchi_title: "ଜଳର ସ୍ୱଚ୍ଛତା (Secchi ଡିସ୍କ)",
    secchi_disc_label: "ସେକ୍କି ଡିସ୍କ",
    secchi_desc_opt: "✓ 25 – 50 NTU : ଉତ୍ତମ ସୂର୍ଯ୍ୟାଲୋକ ଓ ପ୍ଲାଙ୍କଟନ୍। କଙ୍କଡ଼ା ଭଲ ଭାବେ ବଢ଼ନ୍ତି।",
    secchi_desc_murk: "⚠ 30 ସେମିରୁ କମ୍: ଅତ୍ୟଧିକ କାଦୁଅ! ରାତିରେ ଅମ୍ଳଜାନ କମିଯିବାର ଭୟ।",
    secchi_desc_clear: "⚠ 40 ସେମିରୁ ଅଧିକ: ପାଣି ଖୁବ୍ ପରିଷ୍କାର! ତଳେ ଦଳ ଉଠି କଙ୍କଡ଼ା କାମୁଡ଼ାକାମୁଡ଼ି ହେବେ।",
    sim_healthy_msg: "✓ ସମସ୍ତ ମାନଦଣ୍ଡ ସୁରକ୍ଷିତ ସୀମାରେ ଅଛି। ପାଣି କଙ୍କଡ଼ା ପାଇଁ ଉତ୍ତମ।",
    sim_warn_msg: "⚠ ସତର୍କତା: କିଛି ମାନଦଣ୍ଡ ପରିବର୍ତ୍ତିତ ହୋଇଛି। ପୋଖରୀ ଉପରେ ନଜର ରଖନ୍ତୁ।",
    sim_crit_msg: "🚨 ବିପଦ: ପାଣି ଖରାପ ହୋଇଛି! ତୁରନ୍ତ ଫ୍ୟାନ୍ ଚଲାନ୍ତୁ ବା ଚୂନ ଦିଅନ୍ତୁ।",
    btn_reset: "↺ ପୁନର୍ବାର ସେଟ୍ କରନ୍ତୁ",

    checks_tag: "ସେନସର ବିବରଣୀ",
    checks_title: "AquaPatrol ପୋଖରୀରେ କ'ଣ ପରୀକ୍ଷା କରେ?",
    checks_desc: "ଗୋଟିଏ ମଜବୁତ୍ ଯନ୍ତ୍ର ପୁରୁଣା ଖାତା ଏବଂ କାଚ ମିଟରର ଝଞ୍ଜଟ ଦୂର କରେ।",
    check_ph_title: "pH (ଅମ୍ଳ ଓ କ୍ଷାର ମାତ୍ରା)",
    check_ph_desc: "କଙ୍କଡ଼ା ଖୋଳପା ଛାଡ଼ିବା ଏବଂ ବୃଦ୍ଧି ପାଇଁ pH 7.5 ରୁ 8.5 ରହିବା ଜରୁରୀ।",
    check_turb_title: "ଘୋଳିଆପଣ (Turbidity: 25 – 50 NTU )",
    check_turb_desc: "ସୂର୍ଯ୍ୟାଲୋକ ପ୍ରବେଶର ଗଭୀରତା ମାପେ। 25 – 50 NTU ସବୁଠାରୁ ଉପଯୁକ୍ତ।",
    check_tds_title: "TDS (ଦ୍ରବୀଭୂତ ଲବଣ)",
    check_tds_desc: "ବର୍ଷା ପରେ ପାଣିର ଲୁଣିଆପଣ ହଠାତ୍ ବଦଳିବାରୁ କଙ୍କଡ଼ାଙ୍କୁ ରକ୍ଷା କରେ।",
    check_temp_title: "ଜଳ ତାପମାତ୍ରା",
    check_temp_desc: "ଦିନ ଓ ରାତିର ତାପମାତ୍ରା (26°–32°C) ଯାଞ୍ଚ କରି କଙ୍କଡ଼ାଙ୍କୁ ଚାପମୁକ୍ତ ରଖେ।",
    check_esp_title: "ESP32 ସ୍ମାର୍ଟ ପ୍ରୋସେସର",
    check_esp_desc: "ଢେଉର ବିଭ୍ରାଟ ଦୂର କରି ସଠିକ୍ ରିଡିଂ ଚାଷୀଙ୍କ ପାଖକୁ ପଠାଏ।",
    check_alerts_title: "ହ୍ୱାଟସ୍ଆପ୍ ଓ ଫୋନ୍ ସତର୍କତା",
    check_alerts_desc: "ପାଣି ଖରାପ ହେଲେ ଚାଷୀଙ୍କ ନିଜ ଭାଷାରେ ଫୋନ୍ କଲ୍ ଓ ମେସେଜ୍ ଆସେ।",

    how_title: "କାର୍ଯ୍ୟ ପ୍ରଣାଳୀ — 6ଟି ସରଳ ପାହାଚ",
    how_desc: "ପୋଖରୀରୁ ଚାଷୀଙ୍କ ହାତକୁ: 24 ଘଣ୍ଟା ନିରନ୍ତର ସୁରକ୍ଷା।",
    step1_title: "1. ପୋଖରୀରେ ଲଗାନ୍ତୁ",
    step1_desc: "AquaPatrol କୁ ପାଣି ଉପରେ ଲଗାନ୍ତୁ। ସେନସର ପାଣି ଭିତରକୁ ଯାଏ।",
    step2_title: "2. ସେନସର ମାପିଥାଏ",
    step2_desc: "pH, TDS, ତାପମାତ୍ରା ଓ ଘୋଳିଆପଣ (25 – 50 NTU) ନିରନ୍ତର ମାପେ।",
    step3_title: "3. ESP32 ଯାଞ୍ଚ କରେ",
    step3_desc: "ତଥ୍ୟକୁ ସଠିକ୍ ଏବଂ ସ୍ଥିର ଭାବେ ପ୍ରସ୍ତୁତ କରେ।",
    step4_title: "4. ଫୋନକୁ ପଠାଏ",
    step4_desc: "ତାରବିହୀନ ସଂଯୋଗ ମାଧ୍ୟମରେ ଚାଷୀଙ୍କ ମୋବାଇଲକୁ ତଥ୍ୟ ଯାଏ।",
    step5_title: "5. ସତର୍କତା ଆସେ",
    step5_desc: "ସୀମା ଟପିଲେ ତୁରନ୍ତ ଆଲର୍ଟ ମିଳିଥାଏ।",
    step6_title: "6. ତୁରନ୍ତ ସମାଧାନ",
    step6_desc: "ଚାଷୀ ସମୟ ଥାଉ ଥାଉ ଚୂନ ଦେଇ ବା ଫ୍ୟାନ୍ ଚଲାଇ କଙ୍କଡ଼ା ବଞ୍ଚାନ୍ତି।",

    why_title: "AquaPatrol କାହିଁକି ଜରୁରୀ?",
    why_desc: "ଦୁଇଥର ଦେଖିବା ମଧ୍ୟରେ ପାଣି ବଦଳିପାରେ। ଆଗରୁ ଜାଣିଲେ କ୍ଷତିରୁ ବଞ୍ଚିହୁଏ।",
    before_title: "ପୂର୍ବରୁ (ପୁରୁଣା ଉପାୟ)",
    before_1: "ଦିନକୁ ଥରେ ମାତ୍ର ହାତରେ ମାପିବା।",
    before_2: "ରାତିରେ ଅମ୍ଳଜାନ କମିଲେ ଜଣାପଡ଼ୁ ନଥିଲା।",
    before_3: "ପାଣିର ଘୋଳିଆପଣ କେବଳ ଆଖିରେ ଅନ୍ଦାଜ କରିବା।",
    before_4: "କଙ୍କଡ଼ା ମରି ଭାସିଲା ପରେ ଯାଇ ଜଣାପଡ଼ୁଥିଲା।",
    after_title: "ଏବେ AquaPatrol ସହିତ",
    after_1: "24 ଘଣ୍ଟା ସ୍ୱୟଂଚାଳିତ ନିରୀକ୍ଷଣ।",
    after_2: "ଘୋଳିଆପଣ 25 NTU ରୁ କମିଲେ ବା 50 NTU ରୁ ବଢ଼ିଲେ ତୁରନ୍ତ ଆଲର୍ଟ।",
    after_3: "ସିଧାସଳଖ ମୋବାଇଲରେ ମେସେଜ୍ ଓ କଲ୍।",
    after_4: "କଙ୍କଡ଼ା ମରିବା ପୂର୍ବରୁ ବଞ୍ଚାଇବାର ସୁଯୋଗ।",

    faq_title: "ଚାଷୀଙ୍କ ସାଧାରଣ ପ୍ରଶ୍ନ",
    faq_1_q: "ପୋଖରୀରେ ଇଣ୍ଟରନେଟ୍ ରହିବା ଜରୁରୀ କି?",
    faq_1_a: "AquaPatrol ୱାଇ-ଫାଇ ଏବଂ ସିମ୍ କାର୍ଡ ଉଭୟରେ ଚାଲେ। ନେଟୱର୍କ କମ୍ ଥିଲେ ମଧ୍ୟ ତଥ୍ୟ ସୁରକ୍ଷିତ ରହେ।",
    faq_2_q: "ଘୋଳିଆପଣ 25-50 NTU କାହିଁକି ଭଲ?",
    faq_2_a: "କଙ୍କଡ଼ା ଚାଷରେ 25 – 50 NTU ସ୍ୱଚ୍ଛତା (Secchi depth) ସର୍ବୋତ୍ତମ। 25 ରୁ କମିଲେ କଙ୍କଡ଼ା ନିଜ ନିଜ ଭିତରେ ଲଢ଼ନ୍ତି; 50 ରୁ ବଢ଼ିଲେ କାଦୁଅ ଶ୍ୱାସକ୍ରିୟା ବନ୍ଦ କରିଦିଏ।",
    faq_3_q: "କମ୍ ପାଠ ପଢ଼ିଥିବା ଚାଷୀ ଏହାକୁ ବ୍ୟବହାର କରିପାରିବେ କି?",
    faq_3_a: "ନିଶ୍ଚିତ ଭାବେ! ଏଥିରେ ବଡ଼ ରଙ୍ଗୀନ ଆଲୋକ (ସବୁଜ, ହଳଦିଆ, ଲାଲ୍) ଏବଂ ଓଡ଼ିଆରେ କହି ଶୁଣାଉଥିବା ଅଡିଓ ବଟନ୍ ରହିଛି।",
    faq_4_q: "ଏହା ଖରା, ବର୍ଷା ଓ କାଦୁଅ ସହିପାରିବ ତ?",
    faq_4_a: "AquaPatrol ସମ୍ପୂର୍ଣ୍ଣ ୱାଟରପ୍ରୁଫ୍ ଏବଂ ଲୁଣିଆ ପାଣି ପ୍ରତିରୋଧୀ ମଜବୁତ୍ ବଡିରେ ନିର୍ମିତ।",

    contact_title: "ଆଜି ହିଁ ଆପଣଙ୍କ କଙ୍କଡ଼ା ଚାଷକୁ ସୁରକ୍ଷିତ କରନ୍ତୁ",
    contact_desc: "ଆମ ଟିମ୍ ସହିତ କଥା ହୁଅନ୍ତୁ। ସାଧାରଣ ଫୋନ୍ କଲ୍ ମଧ୍ୟ କରିପାରିବେ।",
    contact_call: "📞 ହେଲ୍ପଲାଇନ୍: +971 58 189 9486",
    contact_wa: "💬 ହ୍ୱାଟସ୍ଆପ୍: +971 58 189 9486",
    contact_email: "✉️ ଇମେଲ୍: aquapatrol26@gmail.com",
    footer_text: "ସ୍ମାର୍ଟ ଜଳ ପରିଚାଳନା। ସୁସ୍ଥ କଙ୍କଡ଼ା। ଭାରତୀୟ ଚାଷୀଙ୍କ ଉନ୍ନତି।",
    copyright: "© 2026 AquaPatrol. ସର୍ବସ୍ୱତ୍ୱ ସଂରକ୍ଷିତ।"
  }
};

let currentLang = 'en';

// Helper selector
const $ = id => document.getElementById(id);

/**
 * Switch language across entire application
 */
function setLanguage(lang) {
  if (!I18N[lang]) lang = 'en';
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = I18N[lang];

  // Update text for all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update language select dropdown
  const langSelect = $('langSelect');
  if (langSelect && langSelect.value !== lang) {
    langSelect.value = lang;
  }

  // Update Simulator dynamic status text
  updateDemo();

  try {
    localStorage.setItem('aquapatrol_lang', lang);
  } catch(e) {}
}

/**
 * Interactive Water Simulator Logic
 * Parameters:
 *  - pH (healthy: 6.5 - 8.5)
 *  - TDS (healthy: 10,000 - 25,000 ppm / 10k - 25k)
 *  - Temperature (healthy: 26 - 32 °C)
 *  - Turbidity (healthy: 25 - 50 NTU)
 */
function updateDemo() {
  const ph = +$('ph').value;
  const tds = +$('tds').value;
  const temp = +$('temp').value;
  const turb = +$('turb').value;

  $('phVal').textContent = ph.toFixed(1);
  $('tdsVal').textContent = tds + ' ppm';
  $('tempVal').textContent = temp.toFixed(1) + ' °C';
  $('turbVal').textContent = turb + ' NTU';

  // Also update hero preview card metrics
  if ($('heroPhVal')) $('heroPhVal').textContent = ph.toFixed(1);
  if ($('heroTdsVal')) $('heroTdsVal').textContent = tds;
  if ($('heroTempVal')) $('heroTempVal').textContent = temp.toFixed(1) + '°';
  if ($('heroTurbVal')) $('heroTurbVal').textContent = turb + ' NTU';

  // Health checks
  const isPhOk = ph >= 6.5 && ph <= 8.5;
  const isTdsOk = tds >= 10000 && tds <= 25000;
  const isTempOk = temp >= 26 && temp <= 32;
  const isTurbOk = turb >= 25 && turb <= 50;

  const allHealthy = isPhOk && isTdsOk && isTempOk && isTurbOk;
  const isCritical = (ph < 5.5 || ph > 9.5 || tds < 7000 || tds > 30000 || temp < 22 || temp > 36 || turb < 15 || turb > 75);

  const statusBox = $('demoStatus');
  const dict = I18N[currentLang];

  statusBox.className = 'sim-diagnosis-box';

  if (allHealthy) {
    statusBox.classList.add('healthy');
    statusBox.querySelector('.diagnosis-text').textContent = dict.sim_healthy_msg;
  } else if (isCritical) {
    statusBox.classList.add('critical');
    statusBox.querySelector('.diagnosis-text').textContent = dict.sim_crit_msg;
  } else {
    statusBox.classList.add('warning');
    statusBox.querySelector('.diagnosis-text').textContent = dict.sim_warn_msg;
  }

  // Update Optical Turbidity Visualizer
  updateSecchiVisual(turb, dict);
}

/**
 * Update the Optical Turbidity / Water Clarity visualizer
 */
function updateSecchiVisual(turbNtu, dict) {
  const disc = $('secchiDisc');
  const depthLabel = $('secchiDepthMark');
  const desc = $('secchiDesc');
  const waterColumn = $('waterColumn');

  if (!disc || !depthLabel || !desc || !waterColumn) return;

  // Turbidity range: 5 NTU (clear) to 100 NTU (muddy)
  // cylinder height is approx 190px.
  const pct = Math.min(Math.max((turbNtu - 5) / 95, 0), 1);
  const topPx = 20 + pct * 115; // 20px to 135px

  disc.style.top = `${topPx}px`;
  depthLabel.style.top = `${topPx + 6}px`;
  depthLabel.textContent = turbNtu + ' NTU';

  if (turbNtu < 25) {
    // Too clear - transparent water, disc starkly visible
    waterColumn.style.background = 'linear-gradient(180deg, rgba(186, 230, 253, 0.25) 0%, rgba(56, 189, 248, 0.35) 100%)';
    disc.style.opacity = '1.0';
    desc.textContent = dict.secchi_desc_clear;
    desc.style.color = 'var(--warn)';
  } else if (turbNtu > 50) {
    // Too muddy / turbid - brown thick silt, disc fades dramatically
    waterColumn.style.background = 'linear-gradient(180deg, rgba(142, 107, 60, 0.5) 0%, rgba(88, 62, 28, 0.92) 100%)';
    disc.style.opacity = '0.15';
    desc.textContent = dict.secchi_desc_murk;
    desc.style.color = 'var(--bad)';
  } else {
    // Ideal 25-50 NTU planktonic brackish green-brown
    waterColumn.style.background = 'linear-gradient(180deg, rgba(82, 168, 126, 0.35) 0%, rgba(36, 110, 75, 0.7) 100%)';
    disc.style.opacity = '0.80';
    desc.textContent = dict.secchi_desc_opt;
    desc.style.color = 'var(--good)';
  }
}

/**
 * Speech Synthesis Read-Aloud for non-literate farmers
 */
let isSpeaking = false;

function speakFarmerGuide(customText = null) {
  if (!('speechSynthesis' in window)) {
    showToast('Audio reading is not supported in this browser.');
    return;
  }

  const speakBtn = $('speakBtn');

  if (isSpeaking) {
    speechSynthesis.cancel();
    isSpeaking = false;
    if (speakBtn) {
      speakBtn.classList.remove('speaking');
      speakBtn.textContent = I18N[currentLang].btn_audio_read;
    }
    showToast('Stopped audio.');
    return;
  }

  speechSynthesis.cancel();

  let textToSpeak = customText;
  if (!textToSpeak) {
    // Collect key summary text for farmer
    const dict = I18N[currentLang];
    const ph = $('ph').value;
    const turb = $('turb').value;
    const temp = $('temp').value;

    textToSpeak = `${dict.hero_title}. ${dict.hero_desc} ${dict.sim_title}: pH ${ph}, Turbidity ${turb} NTU, Temperature ${temp} degree. ${$('demoStatus').textContent}`;
  }

  const utter = new SpeechSynthesisUtterance(textToSpeak);

  // Map language codes for speech synthesis
  const voiceLangMap = {
    en: 'en-IN',
    hi: 'hi-IN',
    te: 'te-IN',
    ta: 'ta-IN',
    ml: 'ml-IN',
    gu: 'gu-IN',
    bn: 'bn-IN',
    or: 'or-IN'
  };

  utter.lang = voiceLangMap[currentLang] || 'en-US';
  utter.rate = 0.88;
  utter.pitch = 1.0;

  utter.onstart = () => {
    isSpeaking = true;
    if (speakBtn) {
      speakBtn.classList.add('speaking');
      speakBtn.textContent = I18N[currentLang].btn_audio_stop;
    }
    showToast('🔊 Playing audio guide in ' + currentLang.toUpperCase());
  };

  utter.onend = () => {
    isSpeaking = false;
    if (speakBtn) {
      speakBtn.classList.remove('speaking');
      speakBtn.textContent = I18N[currentLang].btn_audio_read;
    }
  };

  utter.onerror = () => {
    isSpeaking = false;
    if (speakBtn) {
      speakBtn.classList.remove('speaking');
      speakBtn.textContent = I18N[currentLang].btn_audio_read;
    }
  };

  speechSynthesis.speak(utter);
}

/**
 * Toast notifications
 */
function showToast(msg) {
  const toast = $('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

/**
 * Scroll Animations (IntersectionObserver)
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

// Reset Simulator to Optimal Standard readings
function resetSimulator() {
  $('ph').value = 7.6;
  $('tds').value = 18000; // 18,000 ppm (within 10k - 25k brackish healthy zone)
  $('temp').value = 28.4;
  $('turb').value = 35; // Ideal Turbidity 35 NTU (healthy: 25 - 50 NTU)
  updateDemo();
  showToast('Reset to healthy standards (TDS: 18,000 ppm / 18k, Turbidity: 35 NTU, pH: 7.6)');
}

// Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Check stored language
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('aquapatrol_lang') || 'en';
  } catch(e) {}
  setLanguage(savedLang);

  // Setup slider event listeners
  ['ph', 'tds', 'temp', 'turb'].forEach(id => {
    const el = $(id);
    if (el) el.addEventListener('input', updateDemo);
  });

  const resetBtn = $('resetDemo');
  if (resetBtn) resetBtn.addEventListener('click', resetSimulator);

  // Language Dropdown Event
  const langSelect = $('langSelect');
  if (langSelect) {
    langSelect.addEventListener('change', e => {
      setLanguage(e.target.value);
      showToast('Switched to ' + e.target.options[e.target.selectedIndex].text);
    });
  }

  // Audio Buttons
  const speakBtn = $('speakBtn');
  if (speakBtn) speakBtn.addEventListener('click', () => speakFarmerGuide());

  const simListenBtn = $('simListenBtn');
  if (simListenBtn) {
    simListenBtn.addEventListener('click', () => {
      const statusText = $('demoStatus').textContent;
      const turbVal = $('turb').value;
      const dict = I18N[currentLang];
      const speech = `${dict.metric_turb}: ${turbVal} NTU. ${statusText}`;
      speakFarmerGuide(speech);
    });
  }

  // FAQ Expand/Collapse
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
    });
  });

  // Mobile menu toggle
  const menuBtn = $('menuBtn');
  const navlinks = $('navlinks');
  if (menuBtn && navlinks) {
    menuBtn.addEventListener('click', () => {
      navlinks.classList.toggle('mobile-open');
    });
    // Close nav on click of any link
    navlinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navlinks.classList.remove('mobile-open'));
    });
  }

  // Back to Top button
  const topBtn = $('topBtn');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('show', window.scrollY > 400);
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initial runs
  updateDemo();
  initScrollAnimations();
});
