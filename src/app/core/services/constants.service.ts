export class Constants {

    public static readonly WEBCHAT_MAPPING_CHAT_SEND_TO_AGENT = '/app/chat-send-to-agent';
    public static readonly PASSWORD_MIN_LENGTH = 6;
    public static readonly PASSWORD_MAX_LENGTH = 12;
    public static readonly NICKNAME_MIN_LENGTH = 6;
    public static readonly NICKNAME_MAX_LENGTH = 12;

    public static readonly MIN_PHONE_LENGTH = 3;
    public static readonly MAX_PHONE_LENGTH = 30;
    // public static readonly PHONE_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    public static readonly PHONE_REGEX = /^\d+$/;

    public static readonly MAX_EMAIL_LENGTH = 100;

    public static readonly MIN_USERNAME_LENGTH = 2;
    public static readonly MAX_USERNAME_LENGTH = 50;
    public static readonly NAME_REGEX = /^[-'a-z\u4e00-\u9eff]$/;


    public static readonly EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/;
    public static readonly SEARCH_REGEX = /^[A-Za-z0-9][ A-Za-z0-9]+$/;


    public static readonly CVV_REGEX = /^[0-9]{3,4}$/;
    public static readonly CARD_EXPIRY_MONTH_REGEX = /^(1[0-2]|0[1-9])$/;
    public static readonly CARD_EXPIRY_YEAR_REGEX = /^[2-9][1-9]$/;   // 2021

    public static readonly PROJECT_TYPE = {
        1: {
            en: 'House',
            zh: '独栋别墅'
        },
        2: {
            en: 'Townhouse',
            zh: '联排别墅'
        },
        3: {
            en: 'Apartment',
            zh: '公寓'
        },
        4: {
            en: 'House & Land',
            zh: '土地别墅'
        }
    };
    public static readonly PROJECT_TYPE_NAME_MAP = {
        1: {
            en: 'House',
            zh: '独栋别墅'
        },
        2: {
            en: 'Townhouse',
            zh: '联排别墅'
        },
        3: {
            en: 'Apartment',
            zh: '公寓'
        },
        4: {
            en: 'Land',
            zh: '土地'
        },
        5: {
            en: 'Package-house',
            zh: '土地别墅'
        }
    };
    public static readonly PROJECT_TYPETAG_COLOR__MAP = {
        1: '#29b514',
        2: '#0fc1d1',
        3: '#CFB53B',
        4: '#c71476'
    };
    public static readonly CBD_COORDINATES = {
        vic: {
            lat: -37.8124,
            lng: 144.9623
        },
        nsw: {
            lat: -33.8688,
            lng: 151.2093
        },
        qld: {
            lat: -27.4705,
            lng: 153.0260
        },
        wa: {
            lat: -31.9523,
            lng: 115.8613
        },
        sa: {
            lat: -34.9285,
            lng: 138.6007
        },
        act: {
            lat: -35.2809,
            lng: 149.1300
        },
        tas: {
            lat: -42.8826,
            lng: 147.3257
        },
        nt: {
            lat: -12.4637,
            lng: 130.8444
        }
    };

    public static readonly PROJECT_ASPECT_NAME_MAP = {
        1: {
            en: 'North',
            zh: '北'
        },
        2: {
            en: 'South',
            zh: '南'
        },
        3: {
            en: 'East',
            zh: '东'
        },
        4: {
            en: 'West',
            zh: '西'
        },
        5: {
            en: 'North-east',
            zh: '东北'
        },
        6: {
            en: 'North-west',
            zh: '西北'
        },
        7: {
            en: 'South-east',
            zh: '东南'
        },
        8: {
            en: 'South-west',
            zh: '西南'
        },
    };

    public static readonly PROJECT_EOI_PHONE_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    public static readonly PROJECT_EOI_EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    public static readonly GOOGLEMAP_CLUSTER_STYLE = [
        {
            textColor: 'white',
            textSize: 16,
            url: './assets/image/dot1.png',
            height: 32,
            width: 32,
            anchor: [16, 16],
            // iconAnchor: [0, 10]
        },
        {
            textColor: 'white',
            textSize: 16,
            url: './assets/image/dot2.png',
            height: 32,
            width: 32,
            anchor: [16, 16],
            // iconAnchor: [0, 10]

        },
        {
            textColor: 'white',
            textSize: 16,
            url: './assets/image/dot3.png',
            height: 32,
            width: 32,
            anchor: [16, 16],
            // iconAnchor: [0, 10]

        }
    ];

    public static readonly MC_OPTIONS = {
        gridSize: 32,
        styles: Constants.GOOGLEMAP_CLUSTER_STYLE,
        maxZoom: 15
    };
}
