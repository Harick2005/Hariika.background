3/**
 * All icons underneath are from the Font Awesome Free 6.6.0 by @fontawesome
 * - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024
 * Fonticons, Inc.
 */
const linkProviders = [
    {
        id: 'link',
        name: 'Direct Link',
        match: (search) => {
            if (
                search.startsWith('//') ||
                (/[\S][\.][\S]/.test(search) && !search.includes(' '))
            ) {
                return search
            }
            return null
        },
        link: (search) => `https:${search}`,
        icon: () =>
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="icon"><path d="M0 256C0 209.4 12.5 165.6 34.3 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.2 98.5C101 38.5 174 0 256 0C350.8 0 433.5 51.5 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z"/></svg>`
    },
    {
        id: 'github',
        name: 'GitHub',
        match: (search) => search.startsWith('gh '),
        link: (search) => `http://github.com/${search.slice(3)}`,
        icon: () =>
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" class="icon"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>`
    },
    {
        id: 'localhost',
        name: 'Localhost',
        match: (search) => search.startsWith(':'),
        link: (search) => `http://localhost${search}`,
        icon: () =>
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" class="icon"><path d="M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z"/></svg>`
    },
    {
        id: 'youtube',
        name: 'YouTube',
        match: (search) => search.startsWith('yt '),
        link: (search) =>
            `https://www.youtube.com/results?search_query=${search.slice(3)}`,
        icon: () =>
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="icon"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>`
    },
    {
        id: 'pin',
        name: 'Pinned',
        match: (search) => {
            const num = +search
            return !Number.isNaN(num) && num > 0 && num <= getPinLinks().length
        },
        link: (search) => getPinLinks()[+search - 1]?.href,
        icon: (search) => getPinLinks()[+search - 1]?.innerHTML
    },
    {
        id: 'ask',
        name: 'Perplexity',
        match: (search) => search.startsWith('ask '),
        link: (search) =>
            `https://www.perplexity.ai/search/new?q=${search.slice(4)}`,
        icon: () =>
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.548 0.496494V7.17096H21.1517V16.6925H18.548V23.403L12.4659 17.3842V23.5035H11.5072V17.412L5.45256 23.4029V16.6925H2.84829V7.17096H5.45192V0.496579L11.5072 6.48812V0.757988H12.4659V6.51523L18.548 0.496494ZM10.8422 7.17096L6.41055 2.78597V7.17096H10.8422ZM5.45192 8.1187H3.80691V15.7448H5.45204L5.45261 13.4535L10.8423 8.11996H5.45192V8.1187ZM6.41118 13.8458V21.1135L11.5072 16.0711V8.80344L6.41118 13.8458ZM12.4799 8.79016V16.0572L17.5894 21.1134L17.5894 13.8458L12.4799 8.79016ZM18.548 15.7448V13.4535L13.1583 8.11996H18.548V8.1187H20.193V15.7448H18.548ZM17.5894 7.17096V2.78605L13.1583 7.17096H17.5894Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.7392 0.0383058C18.9241 0.115455 19.0445 0.29616 19.0445 0.496494V6.67448H21.1517C21.4259 6.67448 21.6482 6.89677 21.6482 7.17096V16.6925C21.6482 16.9667 21.4259 17.189 21.1517 17.189H19.0445V23.403C19.0445 23.6033 18.9241 23.784 18.7392 23.8612C18.5544 23.9383 18.3412 23.8968 18.1988 23.7559L12.9624 18.574V23.5035C12.9624 23.7777 12.7401 24 12.4659 24H11.5072C11.233 24 11.0108 23.7777 11.0108 23.5035V18.6017L5.80176 23.7558C5.65936 23.8967 5.44623 23.9382 5.26135 23.8611C5.07647 23.7839 4.95608 23.6032 4.95608 23.4029V17.189H2.84829C2.57409 17.189 2.35181 16.9667 2.35181 16.6925V7.17096C2.35181 6.89677 2.57409 6.67448 2.84829 6.67448H4.95544V0.496579C4.95544 0.29625 5.07583 0.115548 5.26071 0.0383961C5.44559 -0.0387562 5.65872 0.00275895 5.80112 0.143661L11.0108 5.29843V0.757988C11.0108 0.48379 11.233 0.261508 11.5072 0.261508H12.4659C12.7401 0.261508 12.9624 0.48379 12.9624 0.757988V5.32545L18.1988 0.143594C18.3412 0.00268122 18.5544 -0.0388435 18.7392 0.0383058ZM17.4067 2.3244C17.5247 2.27772 17.6588 2.27704 17.7806 2.32786C17.907 2.38062 18.0033 2.48181 18.0516 2.60459V1.68627L17.4067 2.3244ZM18.0687 7.30086C18.0298 7.44488 17.9277 7.56294 17.794 7.62348H18.3435C18.2098 7.56294 18.1077 7.44488 18.0687 7.30086ZM18.5837 8.61518C18.572 8.61601 18.5601 8.61644 18.548 8.61644H14.3658L18.8973 13.1006C18.9915 13.1939 19.0445 13.3209 19.0445 13.4535V15.2483H19.6966V8.61518H18.5837ZM20.4004 7.66744C20.5163 7.72081 20.6082 7.81757 20.6552 7.93691V7.66744H20.4004ZM20.6552 15.9265C20.6082 16.0459 20.5163 16.1426 20.4004 16.196H20.6552V15.9265ZM18.3995 16.2186C18.256 16.1737 18.1405 16.0654 18.0859 15.9265L18.0859 16.5107C18.1406 16.3719 18.256 16.2636 18.3995 16.2186ZM18.0516 21.2949C18.0033 21.4177 17.907 21.5189 17.7806 21.5716C17.6588 21.6224 17.5247 21.6218 17.4067 21.5751L18.0516 22.2132V21.2949ZM12.6486 16.9226L12.1307 16.4101C12.0621 16.3423 12.0154 16.2565 11.995 16.1638C11.9764 16.2618 11.9284 16.3528 11.8564 16.424L11.3246 16.9503C11.4426 16.9037 11.5767 16.903 11.6985 16.9538C11.838 17.012 11.9408 17.1293 11.9828 17.2694C12.019 17.1171 12.126 16.9881 12.2747 16.9261C12.3965 16.8752 12.5306 16.8759 12.6486 16.9226ZM6.59386 21.5752C6.47584 21.6218 6.34178 21.6225 6.21998 21.5717C6.09355 21.5189 5.99727 21.4177 5.94904 21.295V22.2132L6.59386 21.5752ZM5.9147 16.5107V15.9252C5.86029 16.0646 5.74467 16.1734 5.60087 16.2186C5.74445 16.2634 5.86 16.3718 5.9147 16.5107ZM3.59959 16.196C3.48362 16.1426 3.39175 16.0459 3.34477 15.9265V16.196H3.59959ZM3.34477 7.93691C3.39175 7.81757 3.48362 7.72081 3.59959 7.66744H3.34477V7.93691ZM5.41621 8.61518C5.42801 8.61601 5.43991 8.61644 5.45192 8.61644H9.63476L5.10339 13.1006C5.00918 13.1938 4.95616 13.3208 4.95613 13.4533L4.95568 15.2483H4.30339V8.61518H5.41621ZM5.65648 7.62348C5.79019 7.56294 5.8923 7.44488 5.93123 7.30086C5.97017 7.44488 6.07228 7.56294 6.20599 7.62348H5.65648ZM10.9884 7.64545C11.1279 7.6884 11.2441 7.79162 11.3015 7.93117C11.3605 8.07458 11.3482 8.23449 11.2741 8.36509C11.4033 8.2964 11.5589 8.28702 11.6985 8.34525C11.8499 8.40844 11.958 8.5411 11.9922 8.69711C12.0231 8.53537 12.133 8.39695 12.2887 8.33197C12.4314 8.27243 12.5909 8.28357 12.7218 8.35654C12.6519 8.22754 12.6414 8.07146 12.6991 7.93117C12.7565 7.79164 12.8727 7.68842 13.0121 7.64546C12.8727 7.60251 12.7565 7.49929 12.6991 7.35976C12.6428 7.22278 12.6514 7.07076 12.7169 6.94359C12.5844 7.02125 12.4207 7.03436 12.2747 6.97342C12.1261 6.91143 12.0192 6.78259 11.9829 6.63042C11.9409 6.77068 11.8381 6.88803 11.6985 6.94631C11.559 7.00448 11.4036 6.99519 11.2745 6.92668C11.3482 7.05712 11.3602 7.21664 11.3014 7.35974C11.2441 7.49927 11.1278 7.60248 10.9884 7.64545ZM6.59322 2.3243L5.9484 1.68627V2.6045C5.99663 2.48173 6.09291 2.38054 6.21934 2.32778C6.34114 2.27695 6.4752 2.27763 6.59322 2.3243ZM18.049 13.6582C18.0499 13.6603 18.0507 13.6624 18.0516 13.6645V13.6607L18.049 13.6582ZM5.9515 13.6582L5.94903 13.6607L5.94903 13.6644C5.94984 13.6623 5.95067 13.6603 5.9515 13.6582ZM6.90703 3.97566V6.67448H9.63458L6.90703 3.97566ZM14.3658 6.67448H17.0929V3.97583L14.3658 6.67448ZM12.9764 9.97985V15.8501L17.0929 19.9236L17.0929 14.053L12.9764 9.97985ZM6.90766 14.053V19.9238L11.0108 15.8639V9.99313L6.90766 14.053Z"/></svg>`
    },
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        match: (search) => search.startsWith('gpt '),
        link: (search) =>
            `https://chat.openai.com/?q=${search.slice(4)}`,
        icon: () =>
            `<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"/></svg>`
    },
    {
        id: 'claude',
        name: 'Claude',
        match: (search) => search === 'cl' || search.startsWith('cl '),
        link: (search) =>
            search.startsWith('cl ') && search.slice(3).trim()
                ? `https://claude.ai/new?q=${encodeURIComponent(search.slice(3).trim())}`
                : 'https://claude.ai/new',
        icon: () =>
            `<svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.75923 15.9601L9.47889 13.3119L9.55826 13.0819L9.47889 12.954H9.2489L8.46013 12.9054L5.76341 12.8325L3.42463 12.7353L1.15874 12.6138L0.588624 12.4924L0.0541382 11.7878L0.109207 11.4364L0.588624 11.1141L1.27536 11.174L2.79297 11.2776L5.0702 11.4347L6.72224 11.5319L9.16954 11.7862H9.55826L9.61332 11.6291L9.48051 11.5319L9.37686 11.4347L7.02026 9.83776L4.46931 8.15009L3.1331 7.1783L2.41073 6.68592L2.04631 6.22432L1.8892 5.2169L2.54516 4.49453L3.42625 4.55446L3.65138 4.61439L4.54381 5.30112L6.45014 6.77662L8.93955 8.61007L9.30397 8.91294L9.44974 8.80929L9.46756 8.7364L9.30397 8.46268L7.94994 6.01539L6.50521 3.52598L5.86221 2.49426L5.69215 1.87556C5.63222 1.62127 5.58849 1.40748 5.58849 1.14671L6.33515 0.132813L6.74816 0L7.74425 0.132813L8.16374 0.497234L8.78244 1.91281L9.78501 4.14145L11.3399 7.17182L11.795 8.07072L12.0379 8.90323L12.1286 9.15751H12.2857V9.01175L12.4137 7.30463L12.6502 5.2088L12.8802 2.51208L12.9595 1.75246L13.3353 0.842219L14.0819 0.349845L14.665 0.628426L15.1444 1.31516L15.078 1.75894L14.793 3.61182L14.2342 6.51424L13.8698 8.45782H14.0819L14.3249 8.21487L15.308 6.90944L16.9601 4.84438L17.6889 4.02484L18.5392 3.11945L19.085 2.68862H20.1168L20.8764 3.81752L20.5363 4.98367L19.4738 6.33122L18.5927 7.47308L17.3293 9.17371L16.5406 10.5342L16.6135 10.6427L16.8013 10.6249L19.6552 10.0175L21.1971 9.73897L23.037 9.42313L23.8695 9.81185L23.9602 10.207L23.633 11.0153L21.6652 11.5011L19.3571 11.9628L15.9202 12.7758L15.8781 12.8066L15.9267 12.8665L17.4751 13.0123L18.1376 13.0479H19.7588L22.7779 13.273L23.5666 13.7946L24.0396 14.4327L23.9602 14.9186L22.7455 15.5373L21.1064 15.1486L17.2808 14.2384L15.9688 13.9112H15.7874V14.0197L16.8807 15.0887L18.8842 16.8978L21.3931 19.2301L21.521 19.8067L21.1987 20.2618L20.8586 20.2133L18.6542 18.5547L17.8039 17.8081L15.8781 16.1868H15.7502V16.3569L16.194 17.0063L18.5376 20.5291L18.6591 21.6094L18.489 21.9609L17.8816 22.173L17.2144 22.0516L15.8425 20.1258L14.4269 17.9571L13.2851 16.0135L13.1458 16.0929L12.472 23.3505L12.1562 23.7214L11.4273 24L10.82 23.5384L10.4977 22.7917L10.82 21.3162L11.2087 19.3905L11.5245 17.8599L11.8096 15.9584L11.9796 15.3268L11.9683 15.2847L11.829 15.3025L10.3956 17.2703L8.21556 20.2165L6.49063 22.0629L6.07762 22.2265L5.36174 21.8556L5.42814 21.1931L5.8282 20.6036L8.21556 17.5667L9.65544 15.6847L10.5851 14.5979L10.5786 14.4408H10.5236L4.18263 18.558L3.05373 18.7037L2.56784 18.2486L2.62776 17.502L2.85776 17.259L4.76409 15.9471L4.75761 15.9536L4.75923 15.9601Z"/></svg>`
    },
    {
        id: 'gemini',
        name: 'Gemini',
        match: (search) => search === 'gmn' || search.startsWith('gmn '),
        link: (search) => {
            const query = search.startsWith('gmn ') ? search.slice(4).trim() : ''
            return query
                ? `https://gemini.google.com/app?hl=vi&q=${encodeURIComponent(query)}`
                : 'https://gemini.google.com/app?hl=vi'
        },
        icon: () =>
            `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24Z"/></svg>`
    }
]

const id = (id) => document.getElementById(id)
const getPinLinks = () => Array.from(id('pin')?.querySelectorAll('a') || [])

let audioCtx = null
const getAudioContext = () => {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume()
    }
    return audioCtx
}

const BG_TYPE_KEY = 'bg:type'
const BG_DATA_KEY = 'bg:data'
const BG_SOURCE_KEY = 'bg:source'
const BG_URL_KEY = 'bg:url'
const BG_URL_TYPE_KEY = 'bg:url:type'
const BG_DB_NAME = 'bg-storage'
const BG_STORE_NAME = 'backgrounds'
let currentObjectUrl = null

const openBackgroundDb = () =>
    new Promise((resolve, reject) => {
        const request = indexedDB.open(BG_DB_NAME, 1)

        request.onupgradeneeded = () => {
            const db = request.result
            if (!db.objectStoreNames.contains(BG_STORE_NAME))
                db.createObjectStore(BG_STORE_NAME)
        }

        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    })

const getBackgroundRecord = async () => {
    const db = await openBackgroundDb()
    return new Promise((resolve, reject) => {
        const tx = db.transaction(BG_STORE_NAME, 'readonly')
        const store = tx.objectStore(BG_STORE_NAME)
        const request = store.get('current')

        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    })
}

const saveBackgroundRecord = async (record) => {
    const db = await openBackgroundDb()
    return new Promise((resolve, reject) => {
        const tx = db.transaction(BG_STORE_NAME, 'readwrite')
        const store = tx.objectStore(BG_STORE_NAME)
        const request = store.put(record, 'current')

        request.onsuccess = () => resolve()
        request.onerror = () => reject(request.error)
    })
}

const clearBackgroundRecord = async () => {
    const db = await openBackgroundDb()
    return new Promise((resolve, reject) => {
        const tx = db.transaction(BG_STORE_NAME, 'readwrite')
        const store = tx.objectStore(BG_STORE_NAME)
        const request = store.delete('current')

        request.onsuccess = () => resolve()
        request.onerror = () => reject(request.error)
    })
}

const revokeCurrentObjectUrl = () => {
    if (currentObjectUrl) {
        URL.revokeObjectURL(currentObjectUrl)
        currentObjectUrl = null
    }
}

const detectTypeFromUrl = (value) => {
    const url = value.toLowerCase()
    if (/(\.mp4|\.webm|\.ogg|\.mov)(\?|#|$)/.test(url)) return 'video'
    if (/(\.png|\.jpe?g|\.gif|\.webp|\.svg|\.avif)(\?|#|$)/.test(url))
        return 'image'
    return null
}

const setBackground = ({ type, dataUrl, isInitial = false } = {}) => {
    const video = id('bg')
    const image = id('bg-image')
    const source = video.querySelector('source')
    const defaultSrc = source?.getAttribute('data-default-src')

    if (type === 'image' && dataUrl) {
        image.src = dataUrl
        image.classList.remove('is-hidden')
        video.classList.add('is-hidden')
        video.pause()
        return
    }

    image.classList.add('is-hidden')
    video.classList.remove('is-hidden')

    if (type === 'video' && dataUrl) {
        if (source) {
            source.src = dataUrl
            video.load()
            video.play().catch(() => {})
        }
        return
    }

    if (source && defaultSrc) {
        source.src = defaultSrc
        video.load()
        video.play().catch(() => {})
    }
}

const setPreview = ({ type, dataUrl } = {}) => {
    const previewImage = id('bg-preview-image')
    const previewVideo = id('bg-preview-video')

    if (!previewImage || !previewVideo) return

    if (type === 'image' && dataUrl) {
        previewImage.src = dataUrl
        previewImage.classList.remove('is-hidden')
        previewVideo.classList.add('is-hidden')
        previewVideo.pause()
        return
    }

    if (type === 'video' && dataUrl) {
        previewVideo.src = dataUrl
        previewVideo.classList.remove('is-hidden')
        previewImage.classList.add('is-hidden')
        previewVideo.load()
        previewVideo.play().catch(() => {})
        return
    }

    previewImage.classList.add('is-hidden')
    previewVideo.classList.add('is-hidden')
    previewVideo.pause()
}



const detectSearchMode = (currentMode, search) => {
    if (currentMode != null) {
        const provider = getModeById(currentMode)

        if (provider && !provider.match(search)) return null
    }

    const newProvider = linkProviders.find((p) => p.match(search))
    return newProvider ? newProvider.id : null
}

const getModeById = (id) => linkProviders.find((p) => p.id === id)

const composeLink = (search) => {
    const mode = detectSearchMode(null, search)
    if (mode != null) {
        const provider = getModeById(mode)
        return provider.link(search)
    }

    return `https://www.google.com/search?q=${search}`
}

document.addEventListener(
    'DOMContentLoaded',
    async () => {
        const searchBox = id('search-value')
        const searchIcon = id('search-icon')
        const modeIcon = id('search-icon-override')
        const displayedHour = id('hour')
        const displayedMinute = id('minute')
        const bgControl = id('bg-control')
        const statusButton = id('status')
        const bgInput = id('bg-input')
        const bgModal = id('bg-modal')
        const bgModalClose = id('bg-modal-close')
        const bgModalDone = id('bg-modal-done')
        const bgTabUpload = id('bg-tab-upload')
        const bgTabUrl = id('bg-tab-url')
        const bgPanelUpload = id('bg-panel-upload')
        const bgPanelUrl = id('bg-panel-url')
        const bgSelectFile = id('bg-select-file')
        const bgUrlInput = id('bg-url-input')
        const bgUrlType = id('bg-url-type')
        const bgApplyUrl = id('bg-apply-url')
        const bgReset = id('bg-reset')

        const toggleVisibilityBtn = id('toggle-visibility')
        const hamburgerMenuBtn = id('hamburger-menu-btn')
        const settingsDropdown = id('settings-dropdown')
        const appContainer = id('app')

        let isAppVisible = localStorage.getItem('app:visible') !== 'false'

        const updateAppVisibility = () => {
            if (isAppVisible) {
                appContainer?.classList.remove('app-hidden')
                document.querySelectorAll('.corner-widget').forEach((el) => el.classList.remove('app-hidden'))
            } else {
                appContainer?.classList.add('app-hidden')
                document.querySelectorAll('.corner-widget').forEach((el) => el.classList.add('app-hidden'))
            }
        }

        updateAppVisibility()

        toggleVisibilityBtn?.addEventListener('click', () => {
            isAppVisible = !isAppVisible
            localStorage.setItem('app:visible', isAppVisible)
            updateAppVisibility()
            settingsDropdown?.classList.add('is-hidden')
        })

        hamburgerMenuBtn?.addEventListener('click', (e) => {
            e.stopPropagation()
            settingsDropdown?.classList.toggle('is-hidden')
        })

        bgControl?.addEventListener('click', () => {
            settingsDropdown?.classList.add('is-hidden')
        })

        document.addEventListener('click', (e) => {
            if (!hamburgerMenuBtn?.contains(e.target) && !settingsDropdown?.contains(e.target)) {
                settingsDropdown?.classList.add('is-hidden')
            }
        })

        let mode = null

        const openModal = () => {
            if (!bgModal) return
            bgModal.classList.add('is-open')
            bgModal.setAttribute('aria-hidden', 'false')
        }

        const closeModal = () => {
            if (!bgModal) return
            bgModal.classList.remove('is-open')
            bgModal.setAttribute('aria-hidden', 'true')
        }

        const isModalOpen = () => bgModal?.classList.contains('is-open')
        const isUrlTabActive = () => bgPanelUrl?.classList.contains('is-active')

        const setActiveTab = (tab) => {
            const isUpload = tab === 'upload'
            bgTabUpload?.classList.toggle('is-active', isUpload)
            bgTabUrl?.classList.toggle('is-active', !isUpload)
            bgTabUpload?.setAttribute('aria-selected', String(isUpload))
            bgTabUrl?.setAttribute('aria-selected', String(!isUpload))
            bgPanelUpload?.classList.toggle('is-active', isUpload)
            bgPanelUrl?.classList.toggle('is-active', !isUpload)
        }

        const restoreBackground = async () => {
            const source = localStorage.getItem(BG_SOURCE_KEY)

            if (source === 'url') {
                const url = localStorage.getItem(BG_URL_KEY)
                const type = localStorage.getItem(BG_URL_TYPE_KEY)
                if (url && type) {
                    setBackground({ type, dataUrl: url, isInitial: true })
                    setPreview({ type, dataUrl: url })
                    return
                }
            }

            if (source === 'file') {
                try {
                    const record = await getBackgroundRecord()
                    let selectedRecord = record;
                    if (Array.isArray(record) && record.length > 0) {
                        selectedRecord = record[0];
                    }
                    if (selectedRecord?.blob && selectedRecord?.type) {
                        revokeCurrentObjectUrl()
                        const objectUrl = URL.createObjectURL(selectedRecord.blob)
                        currentObjectUrl = objectUrl
                        setBackground({
                            type: selectedRecord.type,
                            dataUrl: objectUrl,
                            isInitial: true
                        })
                        setPreview({ type: selectedRecord.type, dataUrl: objectUrl })
                        return
                    }
                } catch (error) {
                    console.warn('Failed to load background from IndexedDB', error)
                }
            }

            const savedType = localStorage.getItem(BG_TYPE_KEY)
            const savedData = localStorage.getItem(BG_DATA_KEY)
            if (savedType && savedData) {
                setBackground({ type: savedType, dataUrl: savedData, isInitial: true })
                setPreview({ type: savedType, dataUrl: savedData })
            }
        }

        window.focus()
        searchBox.focus()

        await restoreBackground()



        // Clock
        let clearSecondClock = false
        let secondClock

        const startClock = (initial = false) => {
            const time = new Date()

            const hour = time.getHours()
            const minute = time.getMinutes()

            if (displayedMinute.textContent == minute) return

            displayedMinute.textContent = minute <= 9 ? `0${minute}` : minute

            if (!clearSecondClock && !initial) {
                clearSecondClock = true
                clearInterval(secondClock)
                setInterval(startClock, 60000)
            }

            if (displayedHour.textContent != hour) displayedHour.textContent = hour
        }

        startClock(true)

        secondClock = setInterval(
            startClock,
            (60 - new Date().getSeconds()) * 1000
        )

        id('search').addEventListener('submit', (event) => {
            event.preventDefault()

            window.location.assign(composeLink(searchBox.value))
        })

        bgControl?.addEventListener('click', openModal)
        bgModalClose?.addEventListener('click', closeModal)
        bgModalDone?.addEventListener('click', closeModal)
        bgModal?.addEventListener('click', (event) => {
            if (event.target?.dataset?.close) closeModal()
        })

        bgTabUpload?.addEventListener('click', () => setActiveTab('upload'))
        bgTabUrl?.addEventListener('click', () => setActiveTab('url'))
        bgSelectFile?.addEventListener('click', () => bgInput?.click())

        bgUrlInput?.addEventListener('input', () => {
            const value = bgUrlInput.value.trim()
            const detected = detectTypeFromUrl(value)
            if (detected && bgUrlType) bgUrlType.value = detected
            if (value && bgUrlType)
                setPreview({ type: bgUrlType.value, dataUrl: value })
            else setPreview()
        })

        bgUrlType?.addEventListener('change', () => {
            const value = bgUrlInput?.value.trim()
            if (value) setPreview({ type: bgUrlType.value, dataUrl: value })
        })

        bgApplyUrl?.addEventListener('click', async () => {
            const value = bgUrlInput?.value.trim()
            if (!value || !bgUrlType) return

            revokeCurrentObjectUrl()

            const type = bgUrlType.value
            setBackground({ type, dataUrl: value })
            setPreview({ type, dataUrl: value })

            localStorage.setItem(BG_SOURCE_KEY, 'url')
            localStorage.setItem(BG_URL_KEY, value)
            localStorage.setItem(BG_URL_TYPE_KEY, type)
            localStorage.removeItem(BG_TYPE_KEY)
            localStorage.removeItem(BG_DATA_KEY)

            try {
                await clearBackgroundRecord()
            } catch (error) {
                console.warn('Failed to clear IndexedDB background', error)
            }
        })

        bgInput?.addEventListener('change', async () => {
            const files = bgInput.files
            if (!files || files.length === 0) return

            revokeCurrentObjectUrl()

            const records = []
            for (let i = 0; i < files.length; i++) {
                const file = files[i]
                const type = file.type.startsWith('image/') ? 'image' : 'video'
                records.push({ blob: file, type })
            }

            const first = records[0]
            const objectUrl = URL.createObjectURL(first.blob)
            currentObjectUrl = objectUrl
            setBackground({ type: first.type, dataUrl: objectUrl })
            setPreview({ type: first.type, dataUrl: objectUrl })

            localStorage.setItem(BG_SOURCE_KEY, 'file')
            localStorage.removeItem(BG_URL_KEY)
            localStorage.removeItem(BG_URL_TYPE_KEY)
            localStorage.removeItem(BG_TYPE_KEY)
            localStorage.removeItem(BG_DATA_KEY)

            try {
                await saveBackgroundRecord(records)
            } catch (error) {
                console.warn('Failed to store background in IndexedDB', error)
            }
        })

        bgReset?.addEventListener('click', async () => {
            revokeCurrentObjectUrl()
            setBackground({})
            setPreview()

            localStorage.removeItem(BG_SOURCE_KEY)
            localStorage.removeItem(BG_URL_KEY)
            localStorage.removeItem(BG_URL_TYPE_KEY)
            localStorage.removeItem(BG_TYPE_KEY)
            localStorage.removeItem(BG_DATA_KEY)

            try {
                await clearBackgroundRecord()
            } catch (error) {
                console.warn('Failed to clear IndexedDB background', error)
            }
        })

        document.addEventListener('keydown', (event) => {
            if (event.defaultPrevented) return

            if (event.key === 'Escape' && isModalOpen()) {
                event.preventDefault()
                closeModal()
                return
            }

            if (
                isModalOpen() &&
                isUrlTabActive() &&
                event.key === 'Enter' &&
                document.activeElement === bgUrlInput
            ) {
                event.preventDefault()
                bgApplyUrl?.click()
            }
        })

        const suggestionTemplate = id('t-suggest')
        const suggestionBox = id('suggestion')

        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0

        if (!isMac) suggestionBox.classList.add('-custom-scrollbar')

        const updateSuggestion = (suggestions = []) => {
            suggestionBox.style.display = suggestions.length ? 'flex' : 'none'

            while (suggestionBox.firstChild)
                suggestionBox.removeChild(suggestionBox.firstChild)

            suggestions.map((suggest) => {
                const template = suggestionTemplate.content.cloneNode(true)

                const suggestion = template.children[0]
                suggestion.textContent = suggest.label
                suggestion.href = suggest.href

                suggestion.addEventListener('keydown', (event) => {
                    const current = event.currentTarget

                    if (
                        current === document.activeElement &&
                        event.code === 'ArrowLeft'
                    ) {
                        searchBox.focus()
                        requestAnimationFrame(() => {
                            searchBox.setSelectionRange(
                                searchBox.value.length,
                                searchBox.value.length
                            )
                        })
                        return
                    }

                    if (
                        current === document.activeElement &&
                        event.code === 'ArrowDown'
                    ) {
                        current.nextElementSibling.focus()
                        return
                    }

                    if (
                        current === document.activeElement &&
                        event.code === 'ArrowUp'
                    ) {
                        if (current.previousElementSibling)
                            current.previousElementSibling.focus()
                        else {
                            searchBox.focus()
                            requestAnimationFrame(() => {
                                searchBox.setSelectionRange(
                                    searchBox.value.length,
                                    searchBox.value.length
                                )
                            })
                        }

                        return
                    }

                    if (
                        current === document.activeElement &&
                        event.code === 'Tab'
                    ) {
                        searchBox.value = current.textContent
                        requestAnimationFrame(() => {
                            searchBox.focus()
                            fetchSuggestion()
                        })
                        return
                    }
                })

                suggestionBox.appendChild(template)

                suggestionBox.scrollTo(0, 0)
            })
        }

        let abortController = new AbortController()

        const fetchSuggestion = () => {
            abortController.abort()
            abortController = new AbortController()

            // Remove Japanese character joiner
            let value = searchBox.value.replace(/\\\b/g, '')

            if (!Number.isNaN(+value)) {
                const index = +value
                const pin = getPinLinks()[index - 1]

                if (pin) {
                    let label = pin.href.split('://')[1]
                    if (label.endsWith('/')) label = label.slice(0, -1)

                    return updateSuggestion([{ label, href: pin.href }])
                }
            }

            if (!value) return updateSuggestion([])

            let prefix = ''
            if (
                value.startsWith('gh ') ||
                value.startsWith('yt ') ||
                value.startsWith('cl ')
            ) {
                prefix = value.slice(0, 2) + ' '
                value = value.slice(3)
            } else {
                if (
                    value.startsWith('gpt ') ||
                    value.startsWith('ask ') ||
                    value.startsWith('gmn ')
                ) {
                    prefix = value.slice(0, 3) + ' '
                    value = value.slice(4)
                }
            }

            fetch(`https://search.saltyaom.com/hint/${value}`, {
                signal: abortController.signal
            })
                .then((res) => res.json())
                .catch()
                .then(([_, ...suggestions] = []) => {
                    if (!suggestions && !value) updateSuggestion([])

                    updateSuggestion(
                        suggestions.map((suggestion) => ({
                            label: suggestion,
                            href: composeLink(prefix + suggestion)
                        }))
                    )
                })
        }

        searchBox.addEventListener('input', () => {
            const newMode = detectSearchMode(mode, searchBox.value)
            if (newMode != null) {
                mode = newMode
                modeIcon.innerHTML = linkProviders
                    .find((p) => p.id === mode)
                    ?.icon(searchBox.value)

                searchIcon.classList.add('fade-out-up')
                modeIcon.classList.remove('fade-out-down')
            } else {
                mode = null
                modeIcon.innerHTML = ''

                searchIcon.classList.remove('fade-out-up')
                modeIcon.classList.add('fade-out-down')
            }
        })

        searchBox.addEventListener('input', fetchSuggestion, {
            passive: true
        })

        searchBox.addEventListener('keydown', (event) => {
            if (searchBox !== document.activeElement || event.code !== 'ArrowDown')
                return

            if (suggestionBox.firstElementChild)
                requestAnimationFrame(() => {
                    suggestionBox.firstElementChild.focus()
                })
        })

        statusButton?.addEventListener('click', () => displayWeather())

        displayWeather(true)

        initTodoWidget()
        initTimerWidget()
        initPinShortcuts()

        // const bg = id('bg')
        // window.addEventListener('focus', () => {
        //     bg.play()
        // })

        // window.addEventListener('blur', () => {
        //     bg.pause()
        // })
    },
    {
        once: true
    }
)

let isFetching = false

const getWeatherData = async (initial = false) => {
    const lastSaved = localStorage.getItem('forecast-until')
    if (
        lastSaved &&
        localStorage.getItem('forecast-data') &&
        Date.now() < new Date(lastSaved).getTime()
    )
        return JSON.parse(localStorage.getItem('forecast-data'))

    if (initial) throw new Error('No cached data')

    let resolve, reject
    const geolocationPromise = new Promise((_resolve, _reject) => {
        resolve = _resolve
        reject = _reject
    })

    navigator.geolocation.getCurrentPosition(
        ({ coords }) => resolve(coords),
        (error) => {
            console.warn(error)

            const href = location.href
            const query = new URL(href).searchParams
            const latlon = query.get('latlon')
            if (latlon) {
                const [latitude, longitude] = latlon.split(',').map(Number)

                if (Number.isNaN(latitude) || Number.isNaN(longitude))
                    return resolve(new Error('Invalid location'))

                return resolve({ latitude, longitude })
            }

            const latLon = prompt('Latitude,Longtitude')
            if (!latLon) return resolve(new Error('No location'))

            const [latitude, longitude] = latLon.split(',').map(Number)

            if (Number.isNaN(latitude) || Number.isNaN(longitude))
                return resolve(new Error('Invalid location'))

            resolve({ latitude, longitude })
        },
        {
            enableHighAccuracy: true,
            maximumAge: 0
        }
    )

    const geolocation = await geolocationPromise
    if (!geolocation || geolocation instanceof Error) return

    const { latitude, longitude } = geolocation

    if (isFetching) return
    isFetching = true

    const data = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,uv_index,cloud_cover,precipitation_probability&timezone=auto&forecast_days=14`
    ).then((response) => response.json())

    isFetching = false

    localStorage.setItem('forecast-until', data.hourly.time.at(-1))

    localStorage.setItem('forecast-data', JSON.stringify(data))

    return data
}

const icon = (name) => id(`icon-${name}`)

const displayWeather = async (initial = false) => {
    let data

    try {
        data = await getWeatherData(initial)
    } catch (error) {
        // No cached data or other errors on initial load
        data = null
    }

    if (!data || !data.hourly) {
        id('temperature').textContent = '-'
        id('rain').textContent = '-'
        id('uv-index').textContent = 'Click to activate'
        const icon = id('weather-icon')
        while (icon.firstChild) icon.removeChild(icon.firstChild)
        return
    }

    const {
        hourly: {
            time: times,
            temperature_2m: temperatures,
            rain: rains,
            uv_index: uvIndices,
            cloud_cover: cloudCovers,
            precipitation_probability: predictions
        }
    } = data

    const startAt = new Date(times[0]).getTime()
    const secondAt = new Date(times[1]).getTime()
    const interval = secondAt - startAt

    const hour = new Date().getHours()
    const currentTime = new Date().getTime()
    const index = Math.floor((currentTime - startAt) / interval)

    const temperature = temperatures[index]
    const prediction = predictions[index]
    const uvIndex = uvIndices[index]
    const cloudCover = cloudCovers[index]
    const isNight = hour < 6 || hour > 18

    let iconName = ''

    if (prediction > 70) iconName = 'rain'
    else if (prediction > 40) iconName = 'drizzle'
    else if (cloudCover > 50) iconName = 'cloud'
    else if (uvIndex >= 6) iconName = 'sun'
    else if (isNight) iconName = 'moon'
    else iconName = 'sun'

    const icon = id('weather-icon')
    while (icon.firstChild) icon.removeChild(icon.firstChild)

    icon.appendChild(id(`icon-${iconName}`).content.cloneNode(true))

    id('temperature').textContent = ~~temperature
    id('rain').textContent = ~~prediction
    id('uv-index').textContent = ~~uvIndex
}

let clearWeatherClock = false
let weatherClock

const startWeatherInterval = (initial = false) => {
    if (!clearWeatherClock && !initial) {
        clearInterval(weatherClock)
        setInterval(displayWeather, 60 * 60 * 1000)
    } else {
        weatherClock = setInterval(
            startWeatherInterval,
            (60 - new Date().getMinutes()) * 60 * 1000 +
                (60 - new Date().getSeconds()) * 1000
        )
    }

    displayWeather()
}

// ==========================================================================
// 1. To-do List & Quick Notes Widget (Góc trên bên phải)
// ==========================================================================
const initTodoWidget = () => {
    const todoBtn = id('todo-toggle-btn')
    const todoPanel = id('todo-panel')
    const todoCloseBtn = id('todo-close-btn')
    const tabTodo = id('tab-btn-todo')
    const tabNotes = id('tab-btn-notes')
    const viewTodo = id('todo-view-section')
    const viewNotes = id('notes-view-section')
    const todoForm = id('todo-form')
    const todoInput = id('todo-input')
    const todoList = id('todo-items-list')
    const todoRemainingCount = id('todo-remaining-count')
    const todoClearDoneBtn = id('todo-clear-done-btn')
    const todoHeaderBadge = id('todo-header-badge')
    const notesTextarea = id('quick-notes-textarea')
    const notesAutoSaveLabel = id('notes-auto-save-label')
    const notesClearBtn = id('notes-clear-btn')

    let tasks = []
    try {
        tasks = JSON.parse(localStorage.getItem('todo:tasks') || '[]')
    } catch {
        tasks = []
    }

    if (notesTextarea) {
        notesTextarea.value = localStorage.getItem('quick-notes') || ''
    }

    const saveTasks = () => {
        localStorage.setItem('todo:tasks', JSON.stringify(tasks))
        renderTasks()
    }

    const renderTasks = () => {
        if (!todoList) return
        todoList.innerHTML = ''

        const remaining = tasks.filter((t) => !t.completed).length

        if (todoRemainingCount) {
            todoRemainingCount.textContent = `${remaining} việc cần làm`
        }

        if (todoHeaderBadge) {
            if (remaining > 0) {
                todoHeaderBadge.textContent = remaining > 9 ? '9+' : remaining
                todoHeaderBadge.classList.remove('is-hidden')
            } else {
                todoHeaderBadge.classList.add('is-hidden')
            }
        }

        if (tasks.length === 0) {
            const empty = document.createElement('li')
            empty.className = 'todo-empty-state'
            empty.textContent = 'Chưa có việc nào. Hãy thêm việc cần làm!'
            todoList.appendChild(empty)
            return
        }

        tasks.forEach((task) => {
            const li = document.createElement('li')
            li.className = `todo-item ${task.completed ? 'is-completed' : ''}`

            const cb = document.createElement('input')
            cb.type = 'checkbox'
            cb.className = 'todo-checkbox'
            cb.checked = task.completed
            cb.addEventListener('change', () => {
                task.completed = cb.checked
                saveTasks()
            })

            const span = document.createElement('span')
            span.className = 'todo-text'
            span.textContent = task.text
            span.addEventListener('click', () => {
                cb.checked = !cb.checked
                task.completed = cb.checked
                saveTasks()
            })

            const delBtn = document.createElement('button')
            delBtn.type = 'button'
            delBtn.className = 'todo-del-btn'
            delBtn.innerHTML = '&#215;'
            delBtn.title = 'Xóa việc này'
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation()
                tasks = tasks.filter((t) => t.id !== task.id)
                saveTasks()
            })

            li.appendChild(cb)
            li.appendChild(span)
            li.appendChild(delBtn)
            todoList.appendChild(li)
        })
    }

    renderTasks()

    todoForm?.addEventListener('submit', (e) => {
        e.preventDefault()
        const text = todoInput?.value.trim()
        if (!text) return
        tasks.unshift({
            id: Date.now(),
            text,
            completed: false
        })
        if (todoInput) todoInput.value = ''
        saveTasks()
    })

    todoClearDoneBtn?.addEventListener('click', () => {
        tasks = tasks.filter((t) => !t.completed)
        saveTasks()
    })

    let noteSaveTimeout = null
    notesTextarea?.addEventListener('input', () => {
        clearTimeout(noteSaveTimeout)
        if (notesAutoSaveLabel) notesAutoSaveLabel.textContent = 'Đang lưu...'
        noteSaveTimeout = setTimeout(() => {
            localStorage.setItem('quick-notes', notesTextarea.value)
            if (notesAutoSaveLabel) notesAutoSaveLabel.textContent = '✓ Đã lưu tự động'
        }, 350)
    })

    notesClearBtn?.addEventListener('click', () => {
        if (confirm('Bạn có chắc muốn xóa toàn bộ ghi chú này không?')) {
            if (notesTextarea) notesTextarea.value = ''
            localStorage.removeItem('quick-notes')
            if (notesAutoSaveLabel) notesAutoSaveLabel.textContent = 'Đã xóa ghi chú'
        }
    })

    const switchTab = (tab) => {
        const isTodo = tab === 'todo'
        tabTodo?.classList.toggle('is-active', isTodo)
        tabNotes?.classList.toggle('is-active', !isTodo)
        viewTodo?.classList.toggle('is-active', isTodo)
        viewTodo?.classList.toggle('is-hidden', !isTodo)
        viewNotes?.classList.toggle('is-active', !isTodo)
        viewNotes?.classList.toggle('is-hidden', isTodo)
        localStorage.setItem('todo:tab', tab)
        if (isTodo) todoInput?.focus()
        else notesTextarea?.focus()
    }

    tabTodo?.addEventListener('click', () => switchTab('todo'))
    tabNotes?.addEventListener('click', () => switchTab('notes'))

    const savedTab = localStorage.getItem('todo:tab') || 'todo'
    switchTab(savedTab)

    todoBtn?.addEventListener('click', (e) => {
        e.stopPropagation()
        id('timer-panel')?.classList.add('is-hidden')
        id('settings-dropdown')?.classList.add('is-hidden')
        todoPanel?.classList.toggle('is-hidden')
    })

    todoCloseBtn?.addEventListener('click', () => {
        todoPanel?.classList.add('is-hidden')
    })

    document.addEventListener('click', (e) => {
        if (!todoBtn?.contains(e.target) && !todoPanel?.contains(e.target)) {
            todoPanel?.classList.add('is-hidden')
        }
    })
}

// ==========================================================================
// 2. Bộ đếm thời gian / Hẹn giờ (Góc phải phía dưới màn hình)
// ==========================================================================
const TIMER_AUDIO_DB = 'timer-sound-storage'
const TIMER_AUDIO_STORE = 'sounds'

const openTimerSoundDb = () =>
    new Promise((resolve, reject) => {
        const request = indexedDB.open(TIMER_AUDIO_DB, 1)
        request.onupgradeneeded = () => {
            const db = request.result
            if (!db.objectStoreNames.contains(TIMER_AUDIO_STORE)) {
                db.createObjectStore(TIMER_AUDIO_STORE)
            }
        }
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    })

const saveTimerSound = async (blob, name) => {
    const db = await openTimerSoundDb()
    return new Promise((resolve, reject) => {
        const tx = db.transaction(TIMER_AUDIO_STORE, 'readwrite')
        const store = tx.objectStore(TIMER_AUDIO_STORE)
        store.put({ blob, name, date: Date.now() }, 'customAlarm')
        tx.oncomplete = () => resolve()
        tx.onerror = () => reject(tx.error)
    })
}

const getTimerSound = async () => {
    const db = await openTimerSoundDb()
    return new Promise((resolve, reject) => {
        const tx = db.transaction(TIMER_AUDIO_STORE, 'readonly')
        const store = tx.objectStore(TIMER_AUDIO_STORE)
        const request = store.get('customAlarm')
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    })
}

const clearTimerSound = async () => {
    const db = await openTimerSoundDb()
    return new Promise((resolve, reject) => {
        const tx = db.transaction(TIMER_AUDIO_STORE, 'readwrite')
        const store = tx.objectStore(TIMER_AUDIO_STORE)
        store.delete('customAlarm')
        tx.oncomplete = () => resolve()
        tx.onerror = () => reject(tx.error)
    })
}

const initTimerWidget = () => {
    const timerBtn = id('timer-toggle-btn')
    const timerPanel = id('timer-panel')
    const closeBtn = id('timer-close-btn')
    const digitsEl = id('timer-digits')
    const statusHint = id('timer-status-hint')
    const badgeEl = id('timer-badge')
    const runBtn = id('timer-run-btn')
    const resetBtn = id('timer-reset-btn')
    const presetBtns = document.querySelectorAll('.timer-preset-btn')
    const minusBtn = id('timer-minus-btn')
    const plusBtn = id('timer-plus-btn')
    const customInput = id('timer-custom-input')
    const setBtn = id('timer-set-btn')

    // Sound elements
    const soundSelect = id('timer-sound-select')
    const testSoundBtn = id('timer-test-sound-btn')
    const testBtnText = id('timer-test-btn-text')
    const soundDropBox = id('timer-custom-sound-box')
    const soundFileInput = id('timer-sound-file-input')
    const soundUploadBtn = id('timer-upload-btn')
    const soundFileInfo = id('timer-sound-file-info')
    const soundFileNameEl = id('timer-sound-filename')
    const removeSoundBtn = id('timer-remove-sound-btn')

    let setMinutes = parseInt(localStorage.getItem('timer:minutes') || '25', 10)
    let totalSeconds = setMinutes * 60
    let remainingSeconds = totalSeconds
    let isRunning = false
    let timerInterval = null
    let currentAlarmAudio = null
    let testTimeoutId = null

    if (customInput) customInput.value = setMinutes

    const formatTime = (secs) => {
        const m = Math.floor(secs / 60)
        const s = secs % 60
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
    }

    const updateDisplay = () => {
        const str = formatTime(remainingSeconds)
        if (digitsEl) digitsEl.textContent = str
        if (badgeEl) {
            badgeEl.textContent = str
            if (isRunning) {
                badgeEl.classList.remove('is-hidden')
            }
        }
        if (isRunning) {
            document.title = `(${str}) ⏱️ Hẹn giờ - New Tab`
        }
    }

    // Audio synthesizer sounds
    const playChime = () => {
        try {
            const ctx = getAudioContext()
            const now = ctx.currentTime
            const notes = [523.25, 659.25, 783.99, 1046.50]
            notes.forEach((freq, idx) => {
                const osc = ctx.createOscillator()
                const gain = ctx.createGain()
                osc.type = 'sine'
                osc.frequency.setValueAtTime(freq, now + idx * 0.15)
                gain.gain.setValueAtTime(0.2, now + idx * 0.15)
                gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.15 + 0.6)
                osc.connect(gain)
                gain.connect(ctx.destination)
                osc.start(now + idx * 0.15)
                osc.stop(now + idx * 0.15 + 0.6)
            })
        } catch (e) {
            console.warn('Timer chime error', e)
        }
    }

    const playBeep = () => {
        try {
            const ctx = getAudioContext()
            const now = ctx.currentTime
            for (let i = 0; i < 3; i++) {
                const osc = ctx.createOscillator()
                const gain = ctx.createGain()
                osc.type = 'square'
                osc.frequency.setValueAtTime(880, now + i * 0.2)
                gain.gain.setValueAtTime(0.15, now + i * 0.2)
                gain.gain.setValueAtTime(0, now + i * 0.2 + 0.1)
                osc.connect(gain)
                gain.connect(ctx.destination)
                osc.start(now + i * 0.2)
                osc.stop(now + i * 0.2 + 0.11)
            }
        } catch (e) {
            console.warn('Beep error', e)
        }
    }

    const playBell = () => {
        try {
            const ctx = getAudioContext()
            const now = ctx.currentTime
            const freqs = [659.25, 1318.5, 1975.5]
            freqs.forEach((f, idx) => {
                const osc = ctx.createOscillator()
                const gain = ctx.createGain()
                osc.type = 'triangle'
                osc.frequency.setValueAtTime(f, now)
                gain.gain.setValueAtTime(0.25 / (idx + 1), now)
                gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2)
                osc.connect(gain)
                gain.connect(ctx.destination)
                osc.start(now)
                osc.stop(now + 1.2)
            })
        } catch (e) {
            console.warn('Bell error', e)
        }
    }

    const stopAlarmAudio = () => {
        if (testTimeoutId) {
            clearTimeout(testTimeoutId)
            testTimeoutId = null
        }
        if (currentAlarmAudio) {
            try {
                currentAlarmAudio.pause()
                currentAlarmAudio.currentTime = 0
            } catch (_) {}
            currentAlarmAudio = null
        }
        if (testSoundBtn) {
            testSoundBtn.classList.remove('is-playing')
            if (testBtnText) testBtnText.textContent = 'Thử'
        }
    }

    const playTimerAlarm = async () => {
        stopAlarmAudio()
        const selectedSound = soundSelect?.value || localStorage.getItem('timer:sound-type') || 'chime'

        if (selectedSound === 'custom') {
            try {
                const record = await getTimerSound()
                if (record?.blob) {
                    const objectUrl = URL.createObjectURL(record.blob)
                    const audio = new Audio(objectUrl)
                    currentAlarmAudio = audio
                    audio.play().catch((err) => {
                        console.warn('Custom audio playback failed, fallback to chime', err)
                        playChime()
                    })
                    audio.onended = () => {
                        URL.revokeObjectURL(objectUrl)
                        if (currentAlarmAudio === audio) currentAlarmAudio = null
                    }
                    return
                }
            } catch (err) {
                console.warn('Error fetching custom sound', err)
            }
            playChime()
            return
        }

        if (selectedSound === 'beep') {
            playBeep()
            return
        }

        if (selectedSound === 'bell') {
            playBell()
            return
        }

        playChime()
    }

    const toggleTestSound = async () => {
        if (currentAlarmAudio || testSoundBtn?.classList.contains('is-playing')) {
            stopAlarmAudio()
            return
        }

        const selectedSound = soundSelect?.value || 'chime'
        if (testSoundBtn) {
            testSoundBtn.classList.add('is-playing')
            if (testBtnText) testBtnText.textContent = 'Dừng'
        }

        if (selectedSound === 'custom') {
            try {
                const record = await getTimerSound()
                if (record?.blob) {
                    const objectUrl = URL.createObjectURL(record.blob)
                    const audio = new Audio(objectUrl)
                    currentAlarmAudio = audio
                    audio.play().catch(() => {
                        playChime()
                        stopAlarmAudio()
                    })
                    audio.onended = () => {
                        URL.revokeObjectURL(objectUrl)
                        stopAlarmAudio()
                    }
                    return
                }
            } catch (err) {
                console.warn(err)
            }
            playChime()
            testTimeoutId = setTimeout(stopAlarmAudio, 1000)
            return
        }

        if (selectedSound === 'beep') {
            playBeep()
            testTimeoutId = setTimeout(stopAlarmAudio, 800)
            return
        }

        if (selectedSound === 'bell') {
            playBell()
            testTimeoutId = setTimeout(stopAlarmAudio, 1300)
            return
        }

        playChime()
        testTimeoutId = setTimeout(stopAlarmAudio, 1000)
    }

    const refreshSoundUI = async () => {
        const type = localStorage.getItem('timer:sound-type') || 'chime'
        if (soundSelect) soundSelect.value = type

        let record = null
        try {
            record = await getTimerSound()
        } catch (_) {}

        const savedName = record?.name || localStorage.getItem('timer:sound-name') || ''

        if (record?.blob && savedName) {
            if (soundFileNameEl) soundFileNameEl.textContent = savedName
            soundFileInfo?.classList.remove('is-hidden')
            removeSoundBtn?.classList.remove('is-hidden')
        } else {
            soundFileInfo?.classList.add('is-hidden')
            removeSoundBtn?.classList.add('is-hidden')
            if (type === 'custom') {
                if (soundFileNameEl) soundFileNameEl.textContent = 'Chưa chọn file nào'
                soundFileInfo?.classList.remove('is-hidden')
            }
        }
    }

    const handleAudioFile = async (file) => {
        if (!file) return
        const isAudio =
            file.type.startsWith('audio/') ||
            ['mp3', 'wav', 'ogg', 'm4a', 'aac', 'flac', 'opus'].some((ext) =>
                file.name.toLowerCase().endsWith(ext)
            )
        if (!isAudio) {
            alert('Vui lòng chọn một file âm thanh (.mp3, .wav, .ogg, .m4a...)')
            return
        }

        try {
            await saveTimerSound(file, file.name)
            localStorage.setItem('timer:sound-type', 'custom')
            localStorage.setItem('timer:sound-name', file.name)
            await refreshSoundUI()
            toggleTestSound()
        } catch (e) {
            console.error('Không thể lưu file âm thanh', e)
            alert('Có lỗi khi lưu file âm thanh. Vui lòng thử lại!')
        }
    }

    // Sound UI listeners
    soundSelect?.addEventListener('change', () => {
        stopAlarmAudio()
        localStorage.setItem('timer:sound-type', soundSelect.value)
        refreshSoundUI()
    })

    testSoundBtn?.addEventListener('click', toggleTestSound)

    soundUploadBtn?.addEventListener('click', () => {
        soundFileInput?.click()
    })

    soundFileInput?.addEventListener('change', async () => {
        const file = soundFileInput.files?.[0]
        if (file) {
            await handleAudioFile(file)
            soundFileInput.value = ''
        }
    })

    removeSoundBtn?.addEventListener('click', async (e) => {
        e.stopPropagation()
        stopAlarmAudio()
        try {
            await clearTimerSound()
        } catch (_) {}
        localStorage.removeItem('timer:sound-name')
        localStorage.setItem('timer:sound-type', 'chime')
        await refreshSoundUI()
    })

    // Drag and drop audio file directly into the sound box
    soundDropBox?.addEventListener('dragover', (e) => {
        e.preventDefault()
        e.stopPropagation()
        soundDropBox.classList.add('is-dragover')
    })

    soundDropBox?.addEventListener('dragleave', (e) => {
        e.preventDefault()
        e.stopPropagation()
        soundDropBox.classList.remove('is-dragover')
    })

    soundDropBox?.addEventListener('drop', async (e) => {
        e.preventDefault()
        e.stopPropagation()
        soundDropBox.classList.remove('is-dragover')
        const file = e.dataTransfer?.files?.[0]
        if (file) {
            await handleAudioFile(file)
        }
    })

    refreshSoundUI()

    const startTimer = () => {
        if (remainingSeconds <= 0) {
            remainingSeconds = totalSeconds
        }
        isRunning = true
        if (runBtn) runBtn.textContent = 'Tạm dừng'
        if (statusHint) statusHint.textContent = 'Đang đếm ngược...'
        if (badgeEl) badgeEl.classList.remove('is-hidden')

        timerInterval = setInterval(() => {
            if (remainingSeconds > 0) {
                remainingSeconds--
                updateDisplay()
            } else {
                pauseTimer()
                playTimerAlarm()
                if (statusHint) statusHint.textContent = '🎉 Hết giờ hẹn!'
                if (digitsEl) {
                    digitsEl.classList.add('timer-pulsing')
                    setTimeout(() => digitsEl.classList.remove('timer-pulsing'), 3500)
                }
            }
        }, 1000)

        updateDisplay()
    }

    const pauseTimer = () => {
        isRunning = false
        clearInterval(timerInterval)
        timerInterval = null
        if (runBtn) runBtn.textContent = 'Bắt đầu'
        if (statusHint && remainingSeconds > 0) statusHint.textContent = 'Đã tạm dừng'
        document.title = 'New Tab'
    }

    const resetTimer = () => {
        stopAlarmAudio()
        pauseTimer()
        remainingSeconds = totalSeconds
        updateDisplay()
        if (statusHint) statusHint.textContent = 'Sẵn sàng'
        if (badgeEl) badgeEl.classList.add('is-hidden')
    }

    const applyNewMinutes = (mins) => {
        mins = Math.max(1, Math.min(999, parseInt(mins, 10) || 1))
        setMinutes = mins
        localStorage.setItem('timer:minutes', mins)
        if (customInput) customInput.value = mins
        totalSeconds = setMinutes * 60

        // Highlight preset if matches
        presetBtns.forEach((btn) => {
            btn.classList.toggle('is-active', parseInt(btn.dataset.mins, 10) === mins)
        })

        resetTimer()
    }

    presetBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const mins = parseInt(btn.dataset.mins, 10)
            applyNewMinutes(mins)
        })
    })

    minusBtn?.addEventListener('click', () => {
        const val = parseInt(customInput.value, 10) || 1
        if (val > 1) {
            applyNewMinutes(val - 1)
        }
    })

    plusBtn?.addEventListener('click', () => {
        const val = parseInt(customInput.value, 10) || 1
        if (val < 999) {
            applyNewMinutes(val + 1)
        }
    })

    setBtn?.addEventListener('click', () => {
        applyNewMinutes(customInput?.value)
    })

    customInput?.addEventListener('change', () => {
        applyNewMinutes(customInput.value)
    })

    customInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            applyNewMinutes(customInput.value)
        }
    })

    runBtn?.addEventListener('click', () => {
        stopAlarmAudio()
        if (isRunning) pauseTimer()
        else startTimer()
    })

    resetBtn?.addEventListener('click', () => {
        stopAlarmAudio()
        resetTimer()
    })

    // Initial preset highlight
    presetBtns.forEach((btn) => {
        btn.classList.toggle('is-active', parseInt(btn.dataset.mins, 10) === setMinutes)
    })
    updateDisplay()

    timerBtn?.addEventListener('click', (e) => {
        e.stopPropagation()
        id('todo-panel')?.classList.add('is-hidden')
        id('settings-dropdown')?.classList.add('is-hidden')
        timerPanel?.classList.toggle('is-hidden')
        if (timerPanel?.classList.contains('is-hidden')) {
            stopAlarmAudio()
        }
    })

    closeBtn?.addEventListener('click', () => {
        stopAlarmAudio()
        timerPanel?.classList.add('is-hidden')
    })

    document.addEventListener('click', (e) => {
        if (!timerBtn?.contains(e.target) && !timerPanel?.contains(e.target)) {
            stopAlarmAudio()
            timerPanel?.classList.add('is-hidden')
        }
    })
}

// ==========================================================================
// 3. Custom Pins / Lối tắt trang web tùy chọn (Thêm link & ảnh tùy thích)
// ==========================================================================
const initPinShortcuts = () => {
    const pinContainer = id('pin')
    const addPinBtn = id('pin-add-btn')
    const menuManageBtn = id('pin-manage-menu-btn')

    const pinModal = id('pin-modal')
    const pinCloseBtn = id('pin-modal-close')
    const pinCancelBtn = id('pin-modal-cancel')
    const pinSaveBtn = id('pin-modal-save')

    const tabAdd = id('pin-tab-add')
    const tabList = id('pin-tab-list')
    const panelAdd = id('pin-panel-add')
    const panelList = id('pin-panel-list')
    const previewContainer = id('pin-preview-container')

    const inputName = id('pin-input-name')
    const inputUrl = id('pin-input-url')
    const selectGroup = id('pin-select-group')
    const inputFile = id('pin-file-input')
    const btnUpload = id('pin-upload-img-btn')
    const btnAutoFavicon = id('pin-auto-favicon-btn')
    const inputImgUrl = id('pin-input-img-url')

    const previewImg = id('pin-preview-img')
    const previewPlaceholder = id('pin-preview-icon-placeholder')
    const previewNameText = id('pin-preview-name-text')
    const previewUrlText = id('pin-preview-url-text')

    const customCountEl = id('pin-custom-count')
    const customListItemsEl = id('pin-custom-list-items')

    let currentCustomIcon = ''

    // Helper: get saved custom pins
    const getSavedPins = () => {
        try {
            return JSON.parse(localStorage.getItem('custom_pins') || '[]')
        } catch {
            return []
        }
    }

    const savePins = (pins) => {
        localStorage.setItem('custom_pins', JSON.stringify(pins))
    }

    // Helper: auto favicon from url
    const getFaviconUrl = (urlStr) => {
        try {
            let fullUrl = urlStr.trim()
            if (!fullUrl) return ''
            if (!fullUrl.startsWith('http://') && !fullUrl.startsWith('https://')) {
                fullUrl = 'https://' + fullUrl
            }
            const domain = new URL(fullUrl).hostname
            if (!domain) return ''
            return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
        } catch {
            return ''
        }
    }

    // Helper: compress/resize image to data URL for fast loading and low storage
    const processImageFile = (file) =>
        new Promise((resolve) => {
            const reader = new FileReader()
            reader.onload = (e) => {
                const result = e.target.result
                if (file.type === 'image/svg+xml') {
                    resolve(result)
                    return
                }
                const img = new Image()
                img.onload = () => {
                    const canvas = document.createElement('canvas')
                    const maxDim = 128
                    let w = img.width
                    let h = img.height
                    if (w > h) {
                        if (w > maxDim) {
                            h = Math.round((h * maxDim) / w)
                            w = maxDim
                        }
                    } else {
                        if (h > maxDim) {
                            w = Math.round((w * maxDim) / h)
                            h = maxDim
                        }
                    }
                    canvas.width = w
                    canvas.height = h
                    const ctx = canvas.getContext('2d')
                    ctx.drawImage(img, 0, 0, w, h)
                    resolve(canvas.toDataURL('image/png'))
                }
                img.onerror = () => resolve(result)
                img.src = result
            }
            reader.onerror = () => resolve('')
            reader.readAsDataURL(file)
        })

    // Update live preview in modal
    const updatePreview = () => {
        const nameVal = inputName?.value.trim() || 'Tên trang web'
        let urlVal = inputUrl?.value.trim() || 'https://example.com'

        if (previewNameText) previewNameText.textContent = nameVal
        if (previewUrlText) previewUrlText.textContent = urlVal

        let iconSrc = currentCustomIcon || inputImgUrl?.value.trim()
        if (!iconSrc && inputUrl?.value.trim()) {
            iconSrc = getFaviconUrl(inputUrl.value.trim())
        }

        if (iconSrc) {
            if (previewImg) {
                previewImg.src = iconSrc
                previewImg.classList.remove('is-hidden')
            }
            if (previewPlaceholder) previewPlaceholder.classList.add('is-hidden')
        } else {
            if (previewImg) {
                previewImg.src = ''
                previewImg.classList.add('is-hidden')
            }
            if (previewPlaceholder) previewPlaceholder.classList.remove('is-hidden')
        }
    }

    // Render pins into DOM
    const renderPins = () => {
        // Remove existing dynamic groups and dividers
        pinContainer?.querySelectorAll('.pin-group').forEach((el) => el.remove())
        pinContainer?.querySelectorAll('.pin-divider').forEach((el) => el.remove())
        pinContainer?.querySelectorAll('.pin-custom').forEach((el) => el.remove())

        const pins = getSavedPins()
        if (customCountEl) customCountEl.textContent = pins.length

        const groupOrder = ['study', 'entertainment', 'work', 'custom']
        const groupMap = {
            study: [],
            entertainment: [],
            work: [],
            custom: []
        }

        pins.forEach((pin) => {
            const g = pin.group || 'study'
            if (!groupMap[g]) groupMap[g] = []
            groupMap[g].push(pin)
        })

        let renderedGroupCount = 0

        groupOrder.forEach((gKey) => {
            const groupPins = groupMap[gKey] || []
            if (groupPins.length === 0) return

            // If not the first group rendered, insert a divider
            if (renderedGroupCount > 0) {
                const divider = document.createElement('div')
                divider.className = 'pin-divider'
                if (addPinBtn) {
                    pinContainer.insertBefore(divider, addPinBtn)
                } else {
                    pinContainer.appendChild(divider)
                }
            }

            const groupDiv = document.createElement('div')
            groupDiv.className = 'pin-group'
            groupDiv.dataset.group = gKey

            groupPins.forEach((pin) => {
                const a = document.createElement('a')
                a.href = pin.url
                a.title = `${pin.title} (Chuột phải để xóa)`
                a.className = 'pin-custom'
                a.dataset.id = pin.id

                const img = document.createElement('img')
                img.src = pin.icon || getFaviconUrl(pin.url)
                img.alt = pin.title
                img.onerror = () => {
                    const fb = getFaviconUrl(pin.url)
                    if (fb && img.src !== fb) img.src = fb
                }
                a.appendChild(img)

                // Right click contextmenu to delete
                a.addEventListener('contextmenu', (e) => {
                    e.preventDefault()
                    if (confirm(`Bạn có muốn xóa nút lối tắt "${pin.title}" không?`)) {
                        deletePin(pin.id)
                    }
                })

                groupDiv.appendChild(a)
            })

            if (addPinBtn) {
                pinContainer.insertBefore(groupDiv, addPinBtn)
            } else {
                pinContainer.appendChild(groupDiv)
            }

            renderedGroupCount++
        })

        renderModalList(pins)
    }

    const DEFAULT_PINS = [
        {
            id: 'default_gh',
            title: 'GitHub',
            url: 'https://github.com',
            icon: 'https://github.githubassets.com/favicons/favicon.svg',
            group: 'study'
        },
        {
            id: 'default_lhu_learn',
            title: 'Learn LHU',
            url: 'https://learn.lhu.edu.vn/my/',
            icon: 'https://www.google.com/s2/favicons?domain=learn.lhu.edu.vn&sz=128',
            group: 'study'
        },
        {
            id: 'default_lhu_me',
            title: 'Me LHU',
            url: 'https://me.lhu.edu.vn/',
            icon: 'https://www.google.com/s2/favicons?domain=me.lhu.edu.vn&sz=128',
            group: 'study'
        },
        {
            id: 'default_gemini',
            title: 'Gemini',
            url: 'https://gemini.google.com/app?hl=vi',
            icon: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
            group: 'study'
        },
        {
            id: 'default_fb',
            title: 'Facebook',
            url: 'https://facebook.com',
            icon: 'https://www.google.com/s2/favicons?domain=facebook.com&sz=128',
            group: 'entertainment'
        },
        {
            id: 'default_tiktok',
            title: 'TikTok',
            url: 'https://www.tiktok.com/',
            icon: 'https://www.google.com/s2/favicons?domain=tiktok.com&sz=128',
            group: 'entertainment'
        },
        {
            id: 'default_yt',
            title: 'YouTube',
            url: 'https://youtube.com',
            icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=128',
            group: 'entertainment'
        },
        {
            id: 'default_animehay',
            title: 'AnimeHay',
            url: 'https://animehay16.site/#',
            icon: 'https://www.google.com/s2/favicons?domain=animehay16.site&sz=128',
            group: 'entertainment'
        },
        {
            id: 'default_chotot',
            title: 'Chợ Tốt',
            url: 'https://www.chotot.com/',
            icon: 'https://www.google.com/s2/favicons?domain=chotot.com&sz=128',
            group: 'work'
        },
        {
            id: 'default_tele',
            title: 'Telegram',
            url: 'https://web.telegram.org/a/',
            icon: 'https://www.google.com/s2/favicons?domain=telegram.org&sz=128',
            group: 'work'
        },
        {
            id: 'default_tgdd',
            title: 'Thế Giới Di Động',
            url: 'https://www.thegioididong.com/',
            icon: 'https://www.google.com/s2/favicons?domain=thegioididong.com&sz=128',
            group: 'work'
        }
    ]

    const renderModalList = (pins) => {
        if (!customListItemsEl) return
        customListItemsEl.innerHTML = ''

        if (pins.length === 0) {
            const empty = document.createElement('div')
            empty.className = 'pin-list-empty'
            empty.innerHTML = `
                <p>Chưa có lối tắt nào trên màn hình.</p>
                <p style="font-size: 11px; margin-top: 6px; opacity: 0.7;">Bấm tab <strong>"Thêm lối tắt mới"</strong> để thêm trang bạn muốn, hoặc bấm nút dưới để lấy lại các trang mẫu.</p>
                <button id="pin-restore-defaults-btn" class="modal-secondary" type="button" style="margin-top: 12px; font-size: 12px; padding: 6px 14px;">
                    Khôi phục 11 lối tắt mẫu ban đầu
                </button>
            `
            customListItemsEl.appendChild(empty)

            empty.querySelector('#pin-restore-defaults-btn')?.addEventListener('click', () => {
                savePins(DEFAULT_PINS)
                renderPins()
            })
            return
        }

        const groupLabels = {
            study: 'Học tập',
            entertainment: 'Giải trí',
            work: 'Công việc',
            custom: 'Nhóm riêng'
        }

        pins.forEach((pin) => {
            const item = document.createElement('div')
            item.className = 'pin-list-item'

            const iconBox = document.createElement('div')
            iconBox.className = 'pin-list-icon'
            const img = document.createElement('img')
            img.src = pin.icon || getFaviconUrl(pin.url)
            img.alt = pin.title
            iconBox.appendChild(img)

            const details = document.createElement('div')
            details.className = 'pin-list-details'

            const titleRow = document.createElement('div')
            titleRow.className = 'pin-list-title'
            titleRow.textContent = pin.title

            const badge = document.createElement('span')
            badge.className = 'pin-list-badge'
            badge.textContent = groupLabels[pin.group] || 'Khác'
            titleRow.appendChild(badge)

            const urlText = document.createElement('div')
            urlText.className = 'pin-list-url'
            urlText.textContent = pin.url

            details.appendChild(titleRow)
            details.appendChild(urlText)

            const delBtn = document.createElement('button')
            delBtn.className = 'pin-list-delete-btn'
            delBtn.type = 'button'
            delBtn.textContent = 'Xóa'
            delBtn.addEventListener('click', () => {
                deletePin(pin.id)
            })

            item.appendChild(iconBox)
            item.appendChild(details)
            item.appendChild(delBtn)

            customListItemsEl.appendChild(item)
        })
    }

    const deletePin = (id) => {
        let pins = getSavedPins()
        pins = pins.filter((p) => p.id !== id)
        savePins(pins)
        renderPins()
    }

    // Modal navigation
    const openModal = (targetTab = 'add') => {
        if (!pinModal) return
        pinModal.classList.add('is-open')
        pinModal.setAttribute('aria-hidden', 'false')
        setActiveTab(targetTab)
        if (targetTab === 'add') {
            resetForm()
            setTimeout(() => inputUrl?.focus(), 50)
        }
    }

    const closeModal = () => {
        if (!pinModal) return
        pinModal.classList.remove('is-open')
        pinModal.setAttribute('aria-hidden', 'true')
    }

    const setActiveTab = (tab) => {
        const isAdd = tab === 'add'
        tabAdd?.classList.toggle('is-active', isAdd)
        tabList?.classList.toggle('is-active', !isAdd)
        tabAdd?.setAttribute('aria-selected', String(isAdd))
        tabList?.setAttribute('aria-selected', String(!isAdd))

        panelAdd?.classList.toggle('is-active', isAdd)
        panelList?.classList.toggle('is-active', !isAdd)

        if (previewContainer) {
            previewContainer.style.display = isAdd ? 'grid' : 'none'
        }

        if (pinSaveBtn) {
            pinSaveBtn.style.display = isAdd ? 'inline-block' : 'none'
        }
    }

    const resetForm = () => {
        if (inputName) inputName.value = ''
        if (inputUrl) inputUrl.value = ''
        if (inputImgUrl) inputImgUrl.value = ''
        if (selectGroup) selectGroup.value = 'study'
        currentCustomIcon = ''
        updatePreview()
    }

    // Listeners
    addPinBtn?.addEventListener('click', (e) => {
        e.stopPropagation()
        openModal('add')
    })

    menuManageBtn?.addEventListener('click', (e) => {
        e.stopPropagation()
        id('settings-dropdown')?.classList.add('is-hidden')
        openModal('list')
    })

    pinCloseBtn?.addEventListener('click', closeModal)
    pinCancelBtn?.addEventListener('click', closeModal)
    pinModal?.addEventListener('click', (e) => {
        if (e.target?.dataset?.close) closeModal()
    })

    tabAdd?.addEventListener('click', () => setActiveTab('add'))
    tabList?.addEventListener('click', () => setActiveTab('list'))

    inputUrl?.addEventListener('input', () => {
        const url = inputUrl.value.trim()
        if (url && (!inputName.value.trim() || inputName.dataset.autofilled === 'true')) {
            try {
                let full = url
                if (!full.startsWith('http://') && !full.startsWith('https://')) {
                    full = 'https://' + full
                }
                const domain = new URL(full).hostname.replace(/^www\./, '')
                const capitalized = domain.split('.')[0]
                if (capitalized) {
                    inputName.value = capitalized.charAt(0).toUpperCase() + capitalized.slice(1)
                    inputName.dataset.autofilled = 'true'
                }
            } catch (_) {}
        }
        updatePreview()
    })

    inputName?.addEventListener('input', () => {
        inputName.dataset.autofilled = 'false'
        updatePreview()
    })

    inputImgUrl?.addEventListener('input', () => {
        currentCustomIcon = ''
        updatePreview()
    })

    btnUpload?.addEventListener('click', () => inputFile?.click())

    inputFile?.addEventListener('change', async () => {
        const file = inputFile.files?.[0]
        if (!file) return
        const dataUrl = await processImageFile(file)
        if (dataUrl) {
            currentCustomIcon = dataUrl
            if (inputImgUrl) inputImgUrl.value = ''
            updatePreview()
        }
        inputFile.value = ''
    })

    btnAutoFavicon?.addEventListener('click', () => {
        const url = inputUrl?.value.trim()
        if (!url) {
            alert('Vui lòng nhập đường dẫn URL trước!')
            inputUrl?.focus()
            return
        }
        const fav = getFaviconUrl(url)
        if (fav) {
            currentCustomIcon = fav
            if (inputImgUrl) inputImgUrl.value = fav
            updatePreview()
        }
    })

    pinSaveBtn?.addEventListener('click', () => {
        let urlVal = inputUrl?.value.trim()
        if (!urlVal) {
            alert('Vui lòng nhập đường dẫn trang web (URL)!')
            inputUrl?.focus()
            return
        }

        if (!urlVal.startsWith('http://') && !urlVal.startsWith('https://')) {
            urlVal = 'https://' + urlVal
        }

        let nameVal = inputName?.value.trim()
        if (!nameVal) {
            try {
                const domain = new URL(urlVal).hostname.replace(/^www\./, '')
                nameVal = domain.charAt(0).toUpperCase() + domain.slice(1)
            } catch {
                nameVal = 'Trang web'
            }
        }

        let iconVal = currentCustomIcon || inputImgUrl?.value.trim()
        if (!iconVal) {
            iconVal = getFaviconUrl(urlVal) || ''
        }

        const newPin = {
            id: 'pin_' + Date.now(),
            title: nameVal,
            url: urlVal,
            icon: iconVal,
            group: selectGroup?.value || 'study'
        }

        const pins = getSavedPins()
        pins.push(newPin)
        savePins(pins)
        renderPins()

        closeModal()
    })

    // Keyboard ESC to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && pinModal?.classList.contains('is-open')) {
            closeModal()
        }
    })

    // Initial render
    renderPins()
}
