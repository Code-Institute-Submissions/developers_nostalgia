
// DOM Elements

const searchContainer = document.querySelector(".pdl-header-search-cont");
const animationWrapper1 = document.querySelector(".animation-wrapper-one");
const animationWrapper2 = document.querySelector(".animation-wrapper-two");
const animationContainer = document.querySelector(".animated-descr-cont");
const genButtonsContainer = document.querySelector(".pdl-gen-btns-cont");
const pDexMainContainer = document.querySelector(".pdex-list-main-cont");
const pDexListContainer = document.querySelector(".pdl-cont");
const typeButtonContainer = document.querySelector(".poke-type-btn-cont");
const popUpContainer = document.querySelector(".pdl-popup-cont");
const pokeSearchInput = document.querySelector("#poke-search");
const specificSearch = document.querySelector(".pdl-complexer-filter-cont");
const typeAdvTab = document.querySelector("#type-adv-tab");
const movesTab = document.querySelector("#moves-tab-cont");
const aboutTab = document.querySelector("#about-tab-cont");
const evolutionsTab = document.querySelector("#evolutions-tab-cont");
const allPopupTabs = document.querySelectorAll(".popup-content-tab-cont");
const baseStatsTab = document.querySelector("#base-stats-cont");
const movesDescrContainer = document.querySelector(".popup-move-descr-cont");
const displMovesContainer = document.querySelector(".popup-moves");
const popupHeadline = document.querySelector("#popup-pkmn-headline");
const favoritePkmnBtn = document.querySelector(".favorite-pkmn-cont");
const rangeSlider = document.querySelector("#range-slider");
const popupImage = document.querySelector("#popup-pkmn-img");
const popupTypes = document.querySelectorAll(".popup-type");
const popupBgColor = document.querySelector(".pdl-popup-bg");
const popupId = document.querySelector(".pdl-popup-id");
const rangeBtns = document.querySelectorAll(".range-btn");
const popupSpecies = document.querySelector(".pdl-popup-category");
const popupTabBtns = document.querySelectorAll(".popup-tab");
const filterRangeBtns = document.querySelectorAll(".weight-range-btn");
const rangeNumbers = document.querySelectorAll(".range-nr");
const rangeValue = document.querySelectorAll(".range-value");
const largeImageScreen = document.querySelector(".large-img-screen");
const headerMenu = document.querySelector(".header-menu-cont");
const headerMenuBtn = document.querySelector(".header-menu-btn");
const pDexListHeader = document.querySelector(".pdl-header");
const scrollTopBtn = document.querySelector("#scroll-top-btn");
const scrollBottonBtn = document.querySelector("#scroll-bottom-btn");
const loading = document.querySelector(".loading-cont");


// All Mega Evolution Names
const allMegaEvolutions = ["venusaur", "charizard", "blastoise", "beedrill", "pidgeot", "alakazam", "slowbro", "steelix", "gengar", "kangaskhan", "pinsir", "gyarados", "aerodactyl", "mewtwo", "ampharos", "scizor", "heracross", "houndoom", "tyranitar", "sceptile", "blaziken", "swampert", "gardevoir", "sableye", "mawile", "aggron", "medicham", "manectric", "sharpedo", "camerupt", "altaria", "glalie", "banette", "absol", "salamence", "metagross", "latias", "latios", "rayquaza", "lopunny", "garchomp", "lucario", "abomasnow", "gallade"
];

// WEBSITES I GOT THE PNG's FROM - (Above):
// https://www.pinclipart.com/
// https://www.kindpng.com/
// https://www.pngkit.com/
// https://www.clipartmax.com/
// https://www.pngitem.com/
// https://www.pngfind.com/


// List of all pkmn
let allPokemon = [];
let currentPkmn = [];
let filteredPkmn = [];

// Pkmn Generation indexes
const genOnePkmn = 151;
const genTwoPkmn = 251;
const genThrPkmn = 386;
const genFourPkmn = 493;

// Specific filter vars
let weightToFilter = null;
let heightToFilter = null;

// Counts fav pkmn
let favoritePkmnCounter = 0;

// Toggeling & Boolean variables
let clearFavsBtnActive = false;
let typeAdvWeakness = true;
let menuOpen = false;
let filtered = false;
let weaknessAdv;

// Type Adv. vars
let doubleDTo;
let doubleDFrom;
let halfDTo;
let halfDFrom;
let noDTo;
let noDFrom;

let allTypes;
let fullArr;
let normalD;

// Selected pkmn
let clickedPkmn;
let pkmnListLength;

// All type colors
const allColors = {
    fire: '#FB6C6C',
    grass: '#48D0B0',
    electric: '#FFD86F',
    water: '#76BDFE',
    ground: '#D68E5E',
    rock: '#C9B98B',
    fairy: '#FEBAEA',
    poison: '#54B564',
    bug: '#2CDAB1',
    dragon: '#0875C8',
    psychic: '#9758AD',
    flying: '#AEC5EF',
    fighting: '#DA475C',
    fighting: '#E4476E',
    fighting: '#EB4971',
    normal: '#B4A3A7',
    ice: '#51C4E7',
    ghost: '#7B62A3',
    dark: '#9D9EA0',
    steel: '#9EB7B8'
}

// Sprite of last Evolution
let finalEvolutionSprite;

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;


// ----------------------------------------------------------------------------- SWIPE FUNCTIONS (Left/Right)

// const gestureZone = document.getElementById('gestureZone');

// gestureZone.addEventListener('touchstart', function(event) {
//     touchstartX = event.changedTouches[0].screenX;
//     touchstartY = event.changedTouches[0].screenY;
// }, false);

// gestureZone.addEventListener('touchend', function(event) {
//     touchendX = event.changedTouches[0].screenX;
//     touchendY = event.changedTouches[0].screenY;
//     handleGesture();
// }, false); 

// function handleGesture() {
//         if (touchendX < (touchstartX - 1.25)) {

//     }

//     if (touchendX > touchstartX - 1.25) {
//         console.log('Swiped right');
//     }
// }


// ----------------------------------------------------------------------------- START SCREEN

// Toggles Gen Buttons Cont and Search Cont
const changeGenBtnPokeSearch = () => {
    const toggleBtn = document.querySelector(".toggle-poke-search-btn");
    const container = document.querySelector(".pdl-start-screen .pdl-gen-btns-cont");

    const genBtns = `
        <button onclick="displayGenBtnDescr(event)" data-index ="1" class="display-gen-btn selected-gen-btn">Gen 1</button>
        <button onclick="displayGenBtnDescr(event)" data-index ="2" class="display-gen-btn">Gen 2</button>
        <button onclick="displayGenBtnDescr(event)" data-index ="3" class="display-gen-btn">Gen 3</button>
        <button onclick="displayGenBtnDescr(event)" data-index ="4" class="display-gen-btn">Gen 4</button>
        <button onclick="displayGenBtnDescr(event)" data-index ="5" class="display-gen-btn">Fav <i class="far fa-heart"></i></button>
    `;
    const searchElements = `
        <div class="pdl-header-search-cont flex-center">
            <i class="fas fa-search"></i>
            <input type="text" id="start-poke-search" aria-label="search" placeholder="i.e.: Charizard / 6">
            <div class="pdex-list-search-btn flex-center">Search</div>
        </div>
    `;

    if (container.innerText.includes("Gen 1")) {
        container.innerHTML = searchElements;
        fillGenBtnDescr(6);
        toggleBtn.innerHTML = `<i style="font-size: 1.2em" class="far fa-times-circle"></i>`;
    } else {
        container.innerHTML = genBtns;
        fillGenBtnDescr(1);
        toggleBtn.innerHTML = `<i class="fas fa-search"></i>`;
    }
}


// ----------------------------------------------------------------------------- START SCREEN ANIMATION

// ANIMATION - For Gen Buttons Description Container
const genDescrContAnimation = () => {
    const arrow = document.querySelector(".arrow-up");
    const gensDescrCont = document.querySelector(".gen-btn-descr-cont");
    const genParagraphs = document.querySelectorAll(".gen-btn-descr p");
    const allGenBtns = document.querySelectorAll(".gen-btns-wrapper .pdl-gen-btns-cont .display-gen-btn");

    if (arrow.classList.contains("opacity")) arrow.classList.remove("opacity");
    gensDescrCont.classList.add("gen-box-shadow");
    allGenBtns[0].classList.add("selected-gen-btn");

    setTimeout(() => {
        genParagraphs.forEach(p => p.classList.remove("opacity"));
    }, 300);
}


// Fills Gen Button Description depending on Gen Btn
const fillGenBtnDescr = (num) => {
    const arrow = document.querySelector(".arrow-up");
    const gensDescrCont = document.querySelector(".gen-btn-descr");

    if (num == 1) {
        arrow.style.left = "10%";
        gensDescrCont.innerHTML = `
                    <p>Total: 151</p>
                    <p>#001 Bulbasaur</p>
                    <p>#151 Mew</p>
                    <p>Versions: Red/Blue/Yellow</p>
                `;
    } else if (num == 2) {
        arrow.style.left = "29%";
        gensDescrCont.innerHTML = `
                    <p>Total: 100</p>
                    <p>#152 Chikorita</p>
                    <p>#251 Celebie</p>
                    <p>Versions: Gold/Silver/Crystal</p>
                `;
    } else if (num == 3) {
        arrow.style.left = "48%";
        gensDescrCont.innerHTML = `
                    <p>Total: 135</p>
                    <p>#252 Treeko</p>
                    <p>#386 Deoxys</p>
                    <p>Versions: Ruby/Sapphire/Emerald</p>
                `;
    } else if (num == 4) {
        arrow.style.left = "68%";
        gensDescrCont.innerHTML = `
                    <p>Total: 107</p>
                    <p>#387 Turtwig</p>
                    <p>#493 Arceus</p>
                    <p>Versions: Diamant/Pearl/Platinum</p>
                `;
    } else if (num == 5) {
        arrow.style.left = "87%";
        gensDescrCont.innerHTML = `
                    <p style="margin-top: .7em">Here You can see all your saved/favorite Pokemon</p>
                `;
    } else if (num == 6) {
        arrow.style.left = "10%";
        gensDescrCont.innerHTML = `
                    <p>Simply Insert the Name or the ID of a Pokemon to search for it in the current/selected Generation</p>
                `;
    }
}


// Changes selected-tab class & fills (click)
const displayGenBtnDescr = (e) => {
    const allGenBtns = document.querySelectorAll(".gen-btns-wrapper .pdl-gen-btns-cont .display-gen-btn");
    const topCursor = document.querySelector(".top-cursor");

    if (!topCursor.classList.contains("opacity")) {
        topCursor.classList.add("opacity");
    }

    allGenBtns.forEach(tab => tab.classList.remove("selected-gen-btn"));
    e.target.classList.add("selected-gen-btn");

    fillGenBtnDescr(e.target.dataset.index);
}


// Firat 
const firstAnimation = (repeat = false) => {
    // Removes all animation classes to 'reset' animation1
    const resetAnimation1 = () => {
        line.classList.add("opacity");
        arrow.classList.add("opacity");
        toggleBtn.classList.add("hidden");
        cursor.classList.remove("opacity");
        topCursor.classList.remove("opacity");
        cursor.classList.remove("cursor-animation");
        gensDescrCont.classList.add("gen-box-shadow");
        topCursor.classList.remove("move-top-cursor");
        animationTxt.classList.remove("txt-animation");
        pkmnCard.classList.remove("pkmn-card-animation");
        genParagraphs.forEach(p => p.classList.add("opacity"));
        [...allTabs].forEach(tab => tab.classList.remove("slided-up"));
        [...allTabs].forEach(tab => tab.classList.remove("selected-tab"));
        allGenBtns.forEach(tab => tab.classList.remove("selected-gen-btn"));
    }

    // to avoid having too many global variables 
    const cursor = document.querySelector(".cursor");
    const arrow = document.querySelector(".arrow-up");
    const topCursor = document.querySelector(".top-cursor");
    const animationTxt = document.querySelector(".animation-txt");
    const gensDescrCont = document.querySelector(".gen-btn-descr");
    const line = document.querySelector(".tabs-animation-cont .line");
    const genParagraphs = document.querySelectorAll(".gen-btn-descr p");
    const toggleBtn = document.querySelector(".toggle-poke-search-btn");
    const pkmnCard = document.querySelector(".pdl-start-screen .poke-card-wide");
    const allTabs = document.querySelectorAll(".tabs-animation-cont .pdl-popup-tabs .popup-tab");
    const allGenBtns = document.querySelectorAll(".gen-btns-wrapper .pdl-gen-btns-cont .display-gen-btn");

    // eventually resets animation1
    if (animationWrapper1.classList.contains("hidden")) {
        animationWrapper1.classList.remove("hidden");
        animationWrapper2.classList.add("hidden");
    }
    // resets classes to animate again 
    if (repeat) resetAnimation1();

    // ANIMATION - Cursor (moves to gen. button & clicks it)
    setTimeout(() => topCursor.classList.add("move-top-cursor"), 2000);

    // ANIMATION - Gen Description cont (opacity, selected-gen-bn class, content appear)
    setTimeout(genDescrContAnimation, 3500);

    // ANIMATION - Toggle BUTTON - Search Container
    setTimeout(() => toggleBtn.classList.remove("hidden"), 3500);

    // ANIMATION - Cursor (slides in and clicks pkmn card)
    setTimeout(() => cursor.classList.add("cursor-animation"), 4500);

    // ANIMATION - Pkmn Card (getting clicked / "pulses")
    setTimeout(() => pkmnCard.classList.add("pkmn-card-animation"), 6500);

    // ANIMATION - Cursor (disappears)
    setTimeout(() => cursor.classList.add("opacity"), 8000);

    // ANIMATION - All Tabs (sliding up / appear)
    setTimeout(() => [...allTabs].forEach(tab => tab.classList.add("slided-up")), 8500);

    // ANIMATION - Tab Description Txt + line + active-tab (appear) 
    setTimeout(() => {
        animationTxt.classList.add("txt-animation");
        allTabs[0].classList.add("selected-tab");
        line.classList.remove("opacity");
    }, 8800);
}

// Calls first Animation when site is loaded 
firstAnimation();


// Changes the Description Text for Tabs
const changeDescrTabTxt = (e, tab) => {
    const allTabs = document.querySelectorAll(".tabs-animation-cont .pdl-popup-tabs .popup-tab");
    const animationTxt = document.querySelector(".animation-txt");

    allTabs.forEach(tab => tab.classList.remove("selected-tab"));
    e.target.classList.add("selected-tab");

    if (animationTxt.classList.contains("txt-animation")) {
        animationTxt.classList.remove("txt-animation")
    }

    switch (tab) {
        case "about":
            animationTxt.innerText = "General Information about the pokemon you clicked on. A variaty of different and relevant data about each Pokemon. Their images/Sprites, phyisique, locations, pokedex entry, training, breeding etc.";
            break;
        case "base":
            animationTxt.innerText = `Here you can check the base stats of the Pokemon you clicked on. Base stats are underlying values that help determine the growth of a Pokemon's six major stats - HP, Attack, Defense, Special Attack (Sp. Atk), Special Defense (Sp. Def), and Speed. `;
            break;
        case "evolution":
            animationTxt.innerText = "Here you can see all the evolutions of the Pokemon you clicked on. Most Pokemon evolve through leveling up but there are more ways like through friendship, evolution stones, trade, special items etc. Some can even Mega Evolve.";
            break;
        case "typeadv":
            animationTxt.innerText = "Every Pokemon has at least one so called typee.g. fire, water, plant. Fired is strong against plant (2x demage) but weak against water (1/2x demage). Here you can see all type advantages/disatvantages from the Pokemon you clicked on.";
            break;
        case "moves":
            animationTxt.innerText = `Check all the moves/attacks of the pokemon you clicked on. There is more then one way how Pokemon can learn attacks. You can use Technical Machines, talk to a Tutor or even through breeding. Click on an attack to get more info.`;
            break;
    }
    setTimeout(() => animationTxt.classList.add("txt-animation"), 400);
}


// Toggles Hidden Text in Start Screen
const toggleStatScreenTxt = () => {
    const hidenTxt = document.querySelector(".hidden-txt");
    const readMore = document.querySelector(".read-more");

    hidenTxt.classList.toggle("not-visible-on-mobile");
    readMore.innerText === "Read more..." ? readMore.innerText = "Read less" : readMore.innerText = "Read more...";
}


// ANIMATION 2. Specific Search
const animationTwo = (repeat = false) => {
    const rangeBtnTabs = document.querySelector(".starter-screen-filter-tabs .range-btns-cont");
    const rangeBtns = document.querySelectorAll(".animation-wrapper-two .weight-btn-cont");
    const aboveBtnsTxt = document.querySelectorAll(".range-descr-txt");

    let animatedElements = [rangeBtnTabs, rangeBtns[0], rangeBtns[1]];
    let time = 300;

    // eventually resets animation2
    if (repeat) {
        animatedElements.forEach(e => e.classList.remove("slide-up"));
        aboveBtnsTxt.forEach(txt => txt.classList.remove("bounce-up"));
    }

    animationWrapper1.classList.add("hidden");
    animationWrapper2.classList.remove("hidden");

    // makes range tabs/btns slide up one after an other
    animatedElements.forEach(element => {
        time += 150;
        setTimeout(() => element.classList.add("slide-up"), time)
    });

    // makes txt slide up with a little delay(after btns)
    setTimeout(() => aboveBtnsTxt.forEach(txt => txt.classList.add("bounce-up")), time + 400);
}


// -------------------------------------------------------------------------------------------- FUNCTIONS 

// Toggles the Header Menu
const toggleHeaderMenu = () => {
    // changes var menuOpen - depending true/false
    menuOpen ? menuOpen = false : menuOpen = true;

    // adds selected class to header, menu & btn
    specificSearch.classList.add("hidden");
    headerMenu.classList.toggle("selected-menu");
    pDexListHeader.classList.toggle("selected-menu");
    headerMenuBtn.classList.toggle("selected-menu");
    // changes icon inside btn
    menuOpen ? headerMenuBtn.innerHTML = `<i class="fas fa-times" aria-hidden="true"></i>` : headerMenuBtn.innerHTML = `<i class="fas fa-bars" aria-hidden="true"></i>`;
}


// Makes header menu dissapear if open
const closeMenuIfOpen = () => {
    if (menuOpen) toggleHeaderMenu();
}


// Creates all filter types buttons (click to filter by type)
const createTypeFilterButtons = (types) => {
    typeButtonContainer.innerHTML = ""
    Object.keys(types).forEach(type => {
        typeButtonContainer.insertAdjacentHTML("beforeend", `
            <button class="poke-type-filter-btn bttn" style="background-color: ${Object.values(types)[Object.keys(types).indexOf(type)]}" onclick="filterPokemonType(event)">${capitalize(type)}</button>
        `);
    });
}


// Toggles Search Bar/Gen Buttons on Mobie
const toggleSearchGenBtns = () => {
    searchContainer.classList.toggle("not-visible-on-mobile");
    genButtonsContainer.classList.toggle("not-visible-on-mobile");
}


// Searches for Pkmn Name or Id and displays it
const searchForPkmn = () => {
    filtered = true;

    remClearFilterBtn();
    // closes Menu if open
    closeMenuIfOpen();
    if (allPokemon.length > 0) {
        // regExp for just numbers in a sting
        const reg = /^[0-9]+$/;
        const inputToSearch = pokeSearchInput.value.toLowerCase();

        // 2 FUNCTIONS - Fitlers all Pokemon Array for either 1. a pkmn name or 2. a pkmn Id
        const searchByName = str => allPokemon.filter(ap => ap.name.toLowerCase().includes(str));
        const searchById = num => allPokemon.filter(ap => ap.id == num);

        // if input is a number -> search by Id, if string -> search by name
        filteredPkmn = reg.test(inputToSearch) ? searchById(inputToSearch) : searchByName(inputToSearch);

        // displays clear filter BUTTON
        pDexListContainer.insertAdjacentHTML("beforebegin", `
            <div onclick="removePkmnTypeFilter()" class="clear-favs-btn clear-filter-btn flex-center" style="border-radius: 0">
                <i class="fas fa-trash-alt"></i>
                <p>Remove Filter</p>
            </div>
        `);
        // clears & fills Pokedex Container
        pDexListContainer.innerHTML = "";
        fillPokemon(filteredPkmn);
    } else {
        // Informs the user to click on any Generation Btn before using this filter
        alert("Please choose a Pokemon Generation first (Gen1/Gen2/Gen3/Gen4/Fav)");
    }
}


// Menu - Checkbox toggles Id nr. on Pkmn Cards (top right #001)
const dispRemCardIds = () => {
    const cardIdCheck = document.querySelector("#card-id-check");
    const allCards = document.querySelectorAll(".poke-card-wide");

    cardIdCheck.checked ? allCards.forEach(c => c.children[0].classList.add("hidden")) : allCards.forEach(c => c.children[0].classList.remove("hidden"));
}


// Menu - Checkbox toggles Animation in Pkmn Cards (rotating pokeball behind image)
const toggleCircleAnimation = () => {
    const circleAniCheck = document.querySelector("#circle-animation-check");
    const allCircles = document.querySelectorAll(".poke-circle");

    circleAniCheck.checked ? allCircles.forEach(circle => circle.classList.remove("poke-circle-animation")) : allCircles.forEach(circle => circle.classList.add("poke-circle-animation"));
}


// Gets all versions where pkmn appears (just names)
const getVersions = versionData => versionData.map(v => v.version.name);


// Assigns selected class (gen-btns)
const assignSelectedGenBtn = (target) => {
    document.querySelectorAll(".display-gen-btn").forEach(btn => btn.classList.remove("selected-gen-btn"));
    target.classList.add("selected-gen-btn");
}


// Removes 'remove filter' - BUTTON if in DOM
const remClearFilterBtn = () => {
    if (document.body.contains(document.querySelector(".clear-filter-btn"))) {
        pDexMainContainer.removeChild(document.querySelector(".clear-filter-btn"));
    }
}


const toggleLoading = () => {
    loading.classList.toggle("hidden");
}


// Gets all pokemon via API - returns formatted pkmn obj array
const displayGen = (fromGen, toGen, e) => {
    filtered = false;
    // removes trash icon
    clearFavsBtnActive = false;
    assignSelectedGenBtn(e.target);
    remClearFilterBtn();
    closeMenuIfOpen();
    toggleLoading();

    pkmnListLength = toGen - (fromGen + 1);
    if (scrollBottonBtn.classList.contains("opacity")) {
        scrollTopBtn.classList.remove("opacity");
        scrollBottonBtn.classList.remove("opacity");
    }


    // Get all moves from a category (lv-up, tutor, machine, egg)
    const getMovesByCat = (moves, category) => moves.filter(move => move.version_group_details[0].move_learn_method.name === category);


    // Checks if Pkmn has a Mega Evolution - returns boolean
    const isMegaPkmn = name => allMegaEvolutions.includes(name) ? true : false;


    // Clears Pokedex List Container & All Pkmn Array
    pDexListContainer.innerHTML = "";
    allPokemon = [];

    // Loop trough first pkmn - last pkmn from the chosen Generation
    for (let i = (fromGen + 1); i <= toGen; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()).then(data => {
            // formats every pokemon
            const formattetPokemon = {
                id: data.id,
                name: capitalize(data.name),
                weight: data.weight / 10,
                height: data.height,
                type1: capitalize(data.types[0].type.name),
                type2: checkForSecondType(data.types),
                abilities: data.abilities,
                versions: getVersions(data.game_indices),
                baseExp: data.base_experience,
                defaultSprites: [data.sprites.front_default, data.sprites.back_default],
                shinySprites: [data.sprites.front_shiny, data.sprites.back_shiny],
                movesLv: getMovesByCat(data.moves, "level-up"),
                movesTut: getMovesByCat(data.moves, "tutor"),
                movesTm: getMovesByCat(data.moves, "machine"),
                movesEgg: getMovesByCat(data.moves, "egg"),
                moves: data.moves,
                baseStats: [
                    {
                        stat: [data.stats[0].stat.name, data.stats[0].base_stat]
                    },
                    {
                        stat: [data.stats[1].stat.name, data.stats[1].base_stat]
                    },
                    {
                        stat: [data.stats[2].stat.name, data.stats[2].base_stat]
                    },
                    {
                        stat: [data.stats[3].stat.name, data.stats[3].base_stat]
                    },
                    {
                        stat: [data.stats[4].stat.name, data.stats[4].base_stat]
                    },
                    {
                        stat: [data.stats[5].stat.name, data.stats[5].base_stat]
                    },
                ]
            }
            // adds color and capitalizes all pokemon names
            formattetPokemon.color = Object.values(allColors)[Object.keys(allColors).indexOf((formattetPokemon.type1).toLowerCase())];

            // fetching species api
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`).then(res => res.json()).then(data => {
                formattetPokemon.text = modifyDescrTxt(data.flavor_text_entries[1].flavor_text);
                formattetPokemon.hatchCounter = 255 * (data.hatch_counter + 1);
                formattetPokemon.eggGroup = data.egg_groups[0].name;
                formattetPokemon.growthRate = data.growth_rate.name;
                formattetPokemon.growthRate = data.growth_rate.name;
                formattetPokemon.baseHappiness = data.base_happiness;
                formattetPokemon.category = data.genera[7].genus;
                formattetPokemon.habitat = data.habitat ? data.habitat.name : "No Data";
                formattetPokemon.dexColor = data.color.name,
                formattetPokemon.catchRate = [data.capture_rate, Math.round((data.capture_rate / 255) * 100) + "%"];

                // fetches evolution data and adds to formattet pokemon                   
                fetch(`${data.evolution_chain.url}`).then(res => res.json()).then(data => {
                    // adds first evolution name to formattet pokemon
                    formattetPokemon.firstEvolution = data.chain.species.name;

                    formattetPokemon.isMega = isMegaPkmn(data.chain.species.name);
                    (data.chain.evolves_to.length > 0) ? formattetPokemon.finalEvolution = data.chain.evolves_to[0].species.name : formattetPokemon.finalEvolution = data.chain.species.name;
                    (data.chain.evolves_to.length > 0) ? formattetPokemon.isMega = isMegaPkmn(data.chain.evolves_to[0].species.name) : false;

                    // adds second evolution pokemon data, to formattet pokemon if its there
                    (data.chain.evolves_to.length > 0) ? formattetPokemon.secndEvolution = {
                        levelup: data.chain.evolves_to[0].evolution_details[0] ? "Lv. " + data.chain.evolves_to[0].evolution_details[0].min_level : "Lv. ?",
                        secndName: data.chain.evolves_to[0].species.name,
                        trigger: data.chain.evolves_to[0].evolution_details[0] ? data.chain.evolves_to[0].evolution_details[0].trigger.name : "",
                        item: data.chain.evolves_to[0].evolution_details[0] ? (data.chain.evolves_to[0].evolution_details[0].item ? capitalize(data.chain.evolves_to[0].evolution_details[0].item.name) : false) : false
                    } : formattetPokemon.secndEvolution = false;

                    // adds third evolution pokemon data if there is one
                    if (data.chain.evolves_to.length > 0) {
                        if (data.chain.evolves_to[0].evolves_to.length > 0) {
                            formattetPokemon.finalEvolution = data.chain.evolves_to[0].evolves_to[0].species.name;
                            formattetPokemon.isMega = isMegaPkmn(data.chain.evolves_to[0].evolves_to[0].species.name);

                            formattetPokemon.thirdEvolution = {
                                levelup: "Lv. " + data.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
                                thirdName: data.chain.evolves_to[0].evolves_to[0].species.name,
                                trigger: data.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name,
                                item: data.chain.evolves_to[0].evolves_to[0].evolution_details[0].item ? capitalize(data.chain.evolves_to[0].evolves_to[0].evolution_details[0].item.name) : ""
                            }
                        } else {
                            // otherwise returns false
                            formattetPokemon.thirdEvolution = false;
                        }
                    } else {
                        formattetPokemon.thirdEvolution = false;
                    }
                });
                // fetching api for images
                fetch(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`).then(image => {
                    formattetPokemon.sprite = image ? image.url : "https://res.cloudinary.com/dxcrd5sos/image/upload/v1606776295/SeekPng.com_missingno-png_3434964_qtefqm.png";
                    allPokemon.push(formattetPokemon);

                }).catch(err => console.error(err));

            }).catch(err => console.error(err));

        }).catch(err => console.error(err));
    }
    // displays all pokemon when loaded
    checkForFavsInLocalStorage();
    checkIfLoaded();
}


// Checks every 50ms if All pokemon are loaded (total amount of pkmn in selected Gen)
const checkIfLoaded = () => {
    if (allPokemon.length >= pkmnListLength) {
        displayAllPokemon(allPokemon);
        toggleLoading();
    } else {
        setTimeout(checkIfLoaded, 50);
    }
}


// ------------------------------------------------------------------------------------------ GENERAL FUNCTIONS

// Capitalizes a string / every word in a string
const capitalize = (str) => {
    // capitalizes one string
    const capitalizeOne = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    // capitalizes multible
    if (str.includes("-")) {
        return str.split("-").map(s => capitalizeOne(s)).join("-");
    }
    // if str includes whitespace - capitalize words after it
    if (str.includes(" ")) {
        return str.split(" ").map(s => capitalizeOne(s)).join(" ");
    } else {
        return capitalizeOne(str);
    }
}


// Checks if pokemon has a second type
const checkForSecondType = (types) => {
    if (types.length > 1) {
        return capitalize(types[1].type.name);
    } else {
        return "hidden";
    }
}


// ------------------------------------------------------------------------------------- DISPLAYING POKEMON FUNCTIONS


// Displays all pokemon cards to screen
const displayAllPokemon = (pokeList) => {
    // sorts pokemon list with pokeomn id
    allPokemon.sort((a, b) => a.id - b.id);
    createTypeFilterButtons(allColors);
    fillPokemon(allPokemon);
}


// Fills container with pokemon cards
const fillPokemon = (pokeList) => {
    pDexListContainer.innerHTML = "";
    createTypeFilterButtons(allColors);

    if (clearFavsBtnActive) {
        pDexListContainer.innerHTML += `<div onclick="clearFavoritePkmn()" class="clear-favs-btn flex-center"><i class="fas fa-trash-alt"></i></div>`;
    }

    pokeList.forEach(pokemon => {
        pDexListContainer.insertAdjacentHTML("beforeend", `
            <div data-pokeId="${pokemon.id}" class="poke-card-wide" style="background-color: ${pokemon.color}">
            <div class="poke-card-wide-id">${displPkmnId(pokemon.id)}</div>
            <div onclick="displayClickedPokemon(event)" class="poke-card-wide-click" data-clickedpkmn="${pokemon.name}"></div>
            
            <div class="poke-card-wide-left flex-column">
                <h3 class="poke-card-wide-headline">${pokemon.name}</h3>
                <div class="poke-card-wide-type flex-center">${pokemon.type1}</div>
                <div class="poke-card-wide-type flex-center ${pokemon.type2}">${pokemon.type2}</div>
            </div>
            <div class="poke-card-wide-right">
                <div class="poke-card-wide-img flex-center">
                    <div class="poke-circle poke-circle-animation flex-center" style="background-color:${pokemon.color}">
                        <div class="circle-left" style="background-color:${pokemon.color}"></div>
                        <div class="circle-right" style="background-color:${pokemon.color}"></div>
                        <div class="poke-inner-circle"></div>
                        </div>
                    <img src="${pokemon.sprite}" alt="${pokemon.name}-image">
                </div>
            </div>
        </div>`);
    });
}


// -------------------------------------------------------------------------------------  CLICK ON PKMN CARD FUNCTIONS


// Filters and displays selected Pkmn type (Type BUTTONS)
const filterPokemonType = (e) => {
    filtered = true;

    // removes remove filter BUTTON if in DOM
    remClearFilterBtn();
    // clears Pokedex List & displays 'Remove Filter BUTTON' over/before Pokedex List
    pDexListContainer.innerHTML = "";
    pDexListContainer.insertAdjacentHTML("beforebegin", `
        <div onclick="removePkmnTypeFilter()" class="clear-favs-btn clear-filter-btn flex-center" style="border-radius: 0">
            <i class="fas fa-trash-alt"></i>
            <p>Remove Filter</p>
        </div>
    `);

    filteredPkmn = allPokemon.filter(pokemon => pokemon.type1 == e.target.innerHTML || pokemon.type2 == e.target.innerHTML);
    currentPkmn = allPokemon;
    // filters/displays all pkmn with selected type (type1 or type2)
    allPokemon = allPokemon.filter(pokemon => pokemon.type1 == e.target.innerHTML || pokemon.type2 == e.target.innerHTML);
    // displays new/filtered pkmn if Pokedex List
    fillPokemon(allPokemon);
    // changes allPokemon-array back (unfiltered)
    allPokemon = currentPkmn;
}


// Removes type filter & displays all pkmn again
const removePkmnTypeFilter = () => {
    filtered = false;
    fillPokemon(allPokemon);
    // removes clear favs/filters BUTTON
    pDexMainContainer.removeChild(document.querySelector(".clear-favs-btn"));
}


// Displays Popup with pokemon data
const displayClickedPokemon = (e) => {
    closeMenuIfOpen();
    // makes popup container appear
    popUpContainer.classList.remove("hidden");

    displayClickedPkmn(e.target.dataset.clickedpkmn);
}


// Makes Popup Window appear and fills it with pkmn data
const displayClickedPkmn = pkmn => {
    // clicked pokemon card data & made up gender percentages
    popupTypes[1].classList.remove("hidden");
    clickedPkmn = allPokemon.filter(p => p.name === pkmn)[0];

    // Filling Pkmn data in popup window (name,types, etc.)
    popupHeadline.innerText = capitalize(clickedPkmn.name);
    popupImage.innerHTML = `<img src="${clickedPkmn.sprite}" alt="clicked pokemon: ${clickedPkmn.name}" >`;
    popupBgColor.style.backgroundColor = clickedPkmn.color;
    popupId.innerHTML = `${displPkmnId(clickedPkmn.id)} <br> <div class="pdl-popup-category">${capitalize(clickedPkmn.category)}</div>`;
    popupSpecies.innerText = "#" + capitalize(clickedPkmn.category);

    popupTypes[0].innerText = clickedPkmn.type1;
    popupTypes[1].innerText = clickedPkmn.type2;
    popupTypes[1].classList.add(clickedPkmn.type2);

    checkIfPkmIsFav();
    fillAboutTab();
}


// Previous/Next pkmn BUTTONS - For switching pokemon without having to close the popup container
const prevNextPkmn = (clPkmn, num) => {

    // returns previous/next pokemon
    const returnPrevNextPkmn = (list, clPkmn, num) => {
        clPkmnIndex = list.indexOf(clPkmn);

        if (clPkmnIndex < 1 && num < 0) {
            return list[list.length - 1];

        } else if (clPkmnIndex === list.length - 1 && num > 0) {
            return list[0];
        } else {
            return list[clPkmnIndex + num];
        }
    }

    // if user clicks trough a filtered list -> use filtered array as argument
    if (filtered) {
        clickedPkmn = returnPrevNextPkmn(filteredPkmn, clPkmn, num);
        // if user clicks trough the 'default' array -> use allPokemon array as argument
    } else if (!filtered) {
        clickedPkmn = returnPrevNextPkmn(allPokemon, clPkmn, num);
    }
    // displyas pkmn
    displayClickedPkmn(clickedPkmn.name);
}


// Displays Id of a displayed Pkmn (#023)
const displPkmnId = id => {
    let resId = id;

    // If pkmn Id has less then 3 characters they get replaced by 0. (1 -> 001)
    const addZero = id => id.toString().split("").length < 3 ? resId = "0" + id : resId;

    addZero(resId);
    while (resId.length < 3) {
        addZero(resId)
    }

    return "#" + resId;
}


// Hides all Tab Container & removes all selected classes from them
const addHiddenToTabs = () => {
    allPopupTabs.forEach(tab => tab.classList.add("hidden"));
    popupTabBtns.forEach(btn => btn.classList.remove("selected-tab"));
}


// Toggles and fills Large Image & Sprites window (by clicking on the image)
const enlargeImage = e => {
    toggleLargeImg();

    largeImageScreen.innerHTML = `
            <div onclick="toggleLargeImg()" class="large-img-close-btn">
                <span class="cross"></span>
                <span class="cross cross2"></span>
            </div>
            <div class="large-img"><img src="${clickedPkmn.sprite}"></div>
            <div class="img-underline"></div>
            <div class="large-img-sprite-cont flex-center">
                <div class="large-img-sprite"><img src="${clickedPkmn.defaultSprites[0]}"></div>
                <div class="large-img-sprite"><img src="${clickedPkmn.defaultSprites[1]}"></div>
                <div class="large-img-sprite"><img src="${clickedPkmn.shinySprites[0]}"></div>
                <div class="large-img-sprite"><img src="${clickedPkmn.shinySprites[1]}"></div>
            </div>         
    `;
}


// Toggles Large Image window/screen
const toggleLargeImg = () => largeImageScreen.classList.toggle("hidden");


// Converts lbs to kilos
const convertKilosToLbs = (num) => Math.round(num / 0.45359237) + "lbs";


// ------------------------------------------------------------------------------------- ABOUT TAB CONTAINER

// Fills About Tab Container with data
const fillAboutTab = () => {
    addHiddenToTabs();
    aboutTab.classList.remove("hidden");
    popupTabBtns[0].classList.add("selected-tab");

    const genderPercentages = displayGenderPercentage();

    aboutTab.innerHTML = `
        <div class="about-pkmn-descr-txt-cont flex-center flex-column opacity">
            <div onclick="toggleOpacityDescrTxt()" class="popup-move-descr-back-btn">&larr;</div>
            <div class="about-sprites-cont flex-center">
                <div class="about-sprites flex-center">
                    <div class="about-sprites-headline">Default Sprites</div>
                    <div class="sprite"><img src="${clickedPkmn.defaultSprites[0]}" alt="front sprite"></div>
                    <div class="sprite"><img src="${clickedPkmn.defaultSprites[1]}" alt="back sprite"></div>
                </div>
                <div class="about-sprites flex-center">
                    <div class="about-sprites-headline for-shiny">Shiny Sprites</div>
                    <div class="sprite"><img src="${clickedPkmn.shinySprites[0]}" alt="front shiny"></div>
                    <div class="sprite"><img src="${clickedPkmn.shinySprites[1]}" alt="back shiny"></div>
                </div>
            </div>
            <div class="about-descr-txt">
                <h3>Desrcription Text</h3>
                ${modifyDescrTxt(clickedPkmn.text)}
            </div>
        </div>
        <div onclick="toggleOpacityDescrTxt()" class="about-to-txt-btn"><i class="far fa-file-alt"></i>Read Descr. &rarr;</div>
        <div class="general-data-cont">
            <div class="general-data-row"><span class="poke-data-attr">Species</span><span class="poke-data-attr-val">${capitalize(clickedPkmn.category)}</span></div>
                <div class="general-data-row"><span class="poke-data-attr">Height</span><span class="poke-data-attr-val">${convertDecimeterToFeetMeter(clickedPkmn.height)[0]} (${convertDecimeterToFeetMeter(clickedPkmn.height)[1]})</span></div>
                <div class="general-data-row"><span class="poke-data-attr">Weight</span><span class="poke-data-attr-val">${convertKilosToLbs(clickedPkmn.weight)} (${clickedPkmn.weight}kg)</span></div>
                <div class="general-data-row"><span class="poke-data-attr">Abilities</span><span id="abilities" class="poke-data-attr-val">${displayAbilities(clickedPkmn.abilities)}</span></div>

            <div class="training-data-cont">
                <div class="breed-data-headline">Training</div>
                <div class="general-data-row"><span class="poke-data-attr">Catch Rate</span><span class="poke-data-attr-val">${clickedPkmn.catchRate[0]} (${clickedPkmn.catchRate[1]})</span></div> 
                <div class="general-data-row"><span class="poke-data-attr">Base Fr.ship</span><span class="poke-data-attr-val">${clickedPkmn.baseHappiness}</span></div> 
                <div class="general-data-row"><span class="poke-data-attr">Base Exp.</span><span class="poke-data-attr-val">${clickedPkmn.baseExp}</span></div>
                <div class="general-data-row"><span class="poke-data-attr">Groth Rate</span><span class="poke-data-attr-val">${capitalize(clickedPkmn.growthRate)}</span></div>
            </div>
        </div>
        <div class="breed-data-cont">
            <div class="breed-data-headline">Breeding</div>
            <div class="general-data-row"><span class="poke-data-attr">Gender</span>
                <div class="gender-data-div poke-data-attr-val">
                    <span class="poke-data-attr-val gender-gap"><i class="fas fa-mars"></i>${genderPercentages[0]}%</span>
                    <span class="poke-data-attr-val"><i class="fas fa-venus"></i>${genderPercentages[1]}%</span>
                </div>
            </div>
            <div class="general-data-row"><span class="poke-data-attr">Egg Groups</span><span class="poke-data-attr-val">${capitalize(clickedPkmn.eggGroup)}</span></div>
            <div class="general-data-row"><span class="poke-data-attr">Egg Cycle</span><span class="poke-data-attr-val">${capitalize(clickedPkmn.type1)}</span></div>
            <div class="general-data-row"><span class="poke-data-attr">Hatch Time</span><span class="poke-data-attr-val">${clickedPkmn.hatchCounter} Steps</span></div>
            <div class="general-data-row"><span class="poke-data-attr">Dex Color</span><span class="poke-data-attr-val flex-center" style="justify-content: flex-start"><div class="p-color-icon" style="background: ${clickedPkmn.dexColor}"></div> ${capitalize(clickedPkmn.dexColor)}</span></div>

            <div class="location-data-cont">
                <div class="breed-data-headline">Location</div>
                <div class="general-data-row"><span class="poke-data-attr">Habitat</span><span class="poke-data-attr-val">${capitalize(clickedPkmn.habitat)}</span></div>
            </div>
            <div class="general-data-row"><span class="poke-data-attr">Encounters</span><span class="poke-data-attr-val location-list-btn" style="font-size: .8em; font-weight: bold;" onclick="fetchPkmnEncounters(clickedPkmn.id)"><i class="far fa-file-alt"></i> See Locations &rarr;</span></div>
        </div>
        <div class="location-list-cont flex-center">
            <div onclick="toggleOpacityLocList()" class="popup-move-descr-back-btn">&larr;</div>
        </div>
    `;
    // gets data for encounters of clicked pokemon
    fetchPkmnEncounters((clickedPkmn.name).toLowerCase());

    const locationList = document.querySelector(".location-list-cont");
    locationList.classList.add("opacity");
}


// Filters non letters out(e.g. '↵') from p.dex text, but keeps 'é'   
const modifyDescrTxt = (txt) => {
    const checkIfLetter = (char) => (/[a-zA-Z]/).test(char);  // coderrocketfuel.com

    return txt.split("").map(char => (checkIfLetter(char) || char == "é" || char === " " || char === ".") ? char : " ").join("");
}


// Gets Encounter Data of a Pkmn
const fetchPkmnEncounters = pkmn => {
    const locationList = document.querySelector(".location-list-cont");

    // toggles encounter window
    locationList.classList.remove("opacity");
    locationList.innerHTML = `
        <div onclick="toggleOpacityLocList()" class="popup-move-descr-back-btn">&larr;</div>
        <div onclick="displAllVersions()" class="to-versions-btn">Versions &rarr;</div>
    `;

    // api call for encounters
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}/encounters`).then(res => res.json()).then(e => {
        // if there are no encounters - displays 'No Encounters'
        if (e.length < 1) {
            locationList.innerHTML = `
                <div onclick="toggleOpacityLocList()" class="popup-move-descr-back-btn">&larr;</div>
                <div onclick="displAllVersions()" class="to-versions-btn">Versions &rarr;</div>
                <p style="font-size: 1.5em">- No Encounters -</p>
            `;
        } else {
            const pkmnLocationList = e.map(location => location.location_area.name);

            pkmnLocationList.forEach(l => locationList.insertAdjacentHTML("beforeend", `<p>${capitalize(l)} </p>`));
            locationList.insertAdjacentHTML("afterbegin", `<h3>Encounter Locations</h3>`);
        }

    }).catch(err => console.error(err));
}


// Displays versions where clicked pkmn appears
const displAllVersions = () => {
    const locationList = document.querySelector(".location-list-cont");

    locationList.innerHTML = `
        <div onclick="toggleOpacityLocList()" class="popup-move-descr-back-btn">&larr;</div>
        <div onclick="fetchPkmnEncounters((clickedPkmn.name).toLowerCase())" class="to-versions-btn">Locations &larr;</div>
    `;
    clickedPkmn.versions.forEach(v => locationList.insertAdjacentHTML("beforeend", `<p>${capitalize(v)}`));

    locationList.insertAdjacentHTML("afterbegin", `<h3>Version Appearance</h3>`);
}


// Toggles the opacity of Description Text and Location List (apper/dissappear)
const toggleOpacityDescrTxt = () => document.querySelector(".about-pkmn-descr-txt-cont").classList.toggle("opacity");


// Toggles Location List window
const toggleOpacityLocList = () => document.querySelector(".location-list-cont").classList.toggle("opacity");


// Converts lbs to kilos
const convertLbsToKilos = (num) => (num * 0.45359237).toFixed(1) + "kg";


// Converts decimeters (input) to feet and meters returns array with both values
const convertDecimeterToFeetMeter = (num) => [((num * 0.3280839895).toFixed(1) + `"`), (num / 10 + "m")];


// Displays pokemons abilities
const displayAbilities = (pkmnAbilities) => {
    let pAbilities = []

    pkmnAbilities.forEach(ability => pAbilities.push(capitalize(ability.ability.name)));
    return addWhiteSpace(pAbilities.toString());
}


// Adds whitespace after a comma (string) 
const addWhiteSpace = str = str => str.includes(",") ? str.substr(0, str.indexOf(",") + 1) + " " + str.substr(str.indexOf(",") + 1) : str;


// Displays Genders in %                         // Couldn't find the data for it so I'm making some up. 
const displayGenderPercentage = () => {
    let female = Math.floor(Math.random() * 54) + 17;
    let male = 100 - female;

    return [male, female];
}


// Displays a stat depending on index to ui
const displayStat = (statIndex) => clickedPkmn.baseStats[statIndex].stat[1];


// Calculates % of stat and displays it
const calculateStatPercent = (stat) => Math.round(stat / 300 * 100);


// Calculates % of total stat and displays it 
const calculateTotalstatsPercent = (stat) => Math.round(stat / 1000 * 100);


// Closes Popup Window
const closePopup = () => popUpContainer.classList.add("hidden");


// ------------------------------------------------------------------------------------- SPECIFIC SEARCH

// Toggles the specific search window
const toggleSpecificSearch = () => {
    closeMenuIfOpen();
    if (allPokemon.length > 0) {
        specificSearch.classList.toggle("hidden");
        // removes all selected classes from Range BUTTONS & adds to id btn
        if ([...rangeBtns].some(rb => rb.classList.contains("selected-range-tab"))) {
            return
        } else {
            rangeBtns[1].classList.add("selected-range-tab");
        }
    } else {
        alert("Please choose a Pokemon Generation first (Gen1/Gen2/Gen3/Gen4/Fav)");
    } // !!! some / every -> check if one of range btns has class active - if not, give id class active else - keep it 
}


// Toggles Move Describtion container
const toggleMoveDescrCont = () => movesDescrContainer.classList.toggle("opacity");


// ------------------------------------------------------------------------------------- BASE STATS TAB CONTAINER

const fillBaseStatsTab = () => {
    addHiddenToTabs();
    baseStatsTab.classList.remove("hidden");
    popupTabBtns[1].classList.add("selected-tab");

    baseStatsTab.innerHTML = `
        <div class="poke-stats-cont flex-column">
            <div class="poke-stat flex-center">
                <div class="poke-stat-attr">HP</div>
                <div class="poke-stat-num" style="color: ${clickedPkmn.color}">${displayStat(0)}</div>
                <div class="poke-stat-progr-bar hp-stat">
                    <div class="stat-progr-bar-filling hp-stat-filling progress-zero" style="width: ${calculateStatPercent(displayStat(0))}%"></div>
                </div>
            </div>
            <div class="poke-stat flex-center">
                <div class="poke-stat-attr">Attack</div>
                <div class="poke-stat-num" style="color: ${clickedPkmn.color}">${displayStat(1)}</div>
                <div class="poke-stat-progr-bar att-stat">
                    <div class="stat-progr-bar-filling att-stat-filling progress-zero" style="width: ${calculateStatPercent(displayStat(1))}%"></div>
                </div>
            </div>
            <div class="poke-stat flex-center">
                <div class="poke-stat-attr">Defense</div>
                <div class="poke-stat-num" style="color: ${clickedPkmn.color}">${displayStat(2)}</div>
                <div class="poke-stat-progr-bar def-stat">
                    <div class="stat-progr-bar-filling def-stat-filling progress-zero" style="width: ${calculateStatPercent(displayStat(2))}%"></div>
                </div>
            </div>
            <div class="poke-stat flex-center">
                <div class="poke-stat-attr">Sp. Att</div>
                <div class="poke-stat-num" style="color: ${clickedPkmn.color}">${displayStat(3)}</div>
                <div class="poke-stat-progr-bar sp-att-stat">
                    <div class="stat-progr-bar-filling sp-att-stat-filling progress-zero" style="width: ${calculateStatPercent(displayStat(3))}%"></div>
                </div>
            </div>
            <div class="poke-stat flex-center">
                <div class="poke-stat-attr">Sp. Def</div>
                <div class="poke-stat-num" style="color: ${clickedPkmn.color}">${displayStat(4)}</div>
                <div class="poke-stat-progr-bar sp-def-stat">
                    <div class="stat-progr-bar-filling sp-def-stat-filling progress-zero" style="width: ${calculateStatPercent(displayStat(4))}%"></div>
                </div>
            </div>
            <div class="poke-stat flex-center">
                <div class="poke-stat-attr">Speed</div>
                <div class="poke-stat-num" style="color: ${clickedPkmn.color}">${displayStat(5)}</div>
                <div class="poke-stat-progr-bar speed-stat">
                    <div class="stat-progr-bar-filling speed-stat-filling progress-zero" style="width: ${calculateStatPercent(displayStat(5))}%"></div>
                </div>
            </div>
            <div class="poke-stat flex-center">
                <div class="poke-stat-attr">Total</div>
                <div class="poke-stat-num" style="color: ${clickedPkmn.color}">${clickedPkmn.baseStats.map(p => p.stat[1]).reduce((a, b) => a + b)}</div>
                <div class="poke-stat-progr-bar total-stat">
                    <div class="stat-progr-bar-filling total-stat-filling progress-zero" style="width: ${calculateTotalstatsPercent(clickedPkmn.baseStats.map(p => p.stat[1]).reduce((a, b) => a + b))}%"></div>
                </div>
            </div>
        </div>
        <p>
            The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.
        </p>
    `;
    setTimeout(() => document.querySelectorAll(".stat-progr-bar-filling").forEach(f => f.classList.remove("progress-zero")), 200);
}


// ----------------------------------------------------------------------------------------------- EVOLUTIONS TAB CONTAINER

// Toggles & fills Evolution Tab
const fillEvolutionsTab = () => {
    addHiddenToTabs();
    evolutionsTab.classList.remove("hidden");
    popupTabBtns[2].classList.add("selected-tab");


    // Filters for evolution (pokemon name argument)
    const filterEvolution = pkmn => allPokemon.filter(p => p.name === capitalize(pkmn))[0];


    // Returns Item if true
    const returnIfTrue = item => capitalize(item) ? item : "";


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ !!!!!

    // BUG - Can't fix this one... tried for a very long time - even Tutor Support couldn't help me here...
    // We've spent hours (and 3 sessions) but couldn't figure out why it's not working.

    // Fetches missing sprite (if pkmn evolution is not in selected/current generation) - should avoid TypeError
    const fetchMissingSprite = (name) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json()).then(pkmn => {
            fetch(`https://pokeres.bastionbot.org/images/pokemon/${pkmn.id}.png`).then(sprite => {
                finalEvolutionSprite = sprite.url;
                let pSprite = sprite.url;

                // const waitForSprite = () => {
                //     if (typeof pSprite !== "undefined") {
                //         return pSprite;
                //     } else {
                //         setTimeout(() => waitForSprite, 250);
                //     }
                // }

                // console.log works by the way...
                console.log(pSprite);

                return pSprite;                   

            }).catch(err => console.error(err))

        }).catch(err => console.error(err));
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ !!!!!


    // Returns all Pokemon Names in chosen generation
    const getAllGenPkmnNames = (gen) => gen.map(pkmn => pkmn.name.toLowerCase());


    // Displays First Evolution of clicked Pkmn
    const addFirstEvolution = () => {
        let firstPkmnSprite;

        if (getAllGenPkmnNames(allPokemon).includes(clickedPkmn.firstEvolution)) {
            firstPkmnSprite = filterEvolution(clickedPkmn.firstEvolution).sprite;
        } else {
            firstPkmnSprite = fetchMissingSprite(clickedPkmn.firstEvolution);
        }

        evolutionsTab.innerHTML = `
        <div class="flex-center flex-column">
            <h3 class="popup-evolution-headline">Evolution Chain</h3>
        </div>
        <div id="evolutions-cont" class="flex-center flex-colum" style="flex-wrap: wrap">
            <div class="flex-center flex-column">
                <div class="popup-evolution flex-center first-evolution"><img id="first-evo-img" src="${firstPkmnSprite}" alt="evolution"></div>
                <div class="evolution-name">${capitalize(clickedPkmn.firstEvolution)}</div>
            </div>
        </div>
        `;
    }


    // Displays Second Evolution of clicked Pkmn if existent
    const addSecndEvolution = pkmn => { // pkmn instead!
        let secndPkmnSprite;

        if (getAllGenPkmnNames(allPokemon).includes(clickedPkmn.secndEvolution.secndName)) {
            secndPkmnSprite = filterEvolution(clickedPkmn.secndEvolution.secndName).sprite;
        } else {
            secndPkmnSprite = fetchMissingSprite(clickedPkmn.secndEvolution.secndName);
        }

        document.querySelector("#evolutions-cont").insertAdjacentHTML("beforeend", `
            <div class="popup-evolution-box flex-center">
                <div class="popup-evolution-arrow second-evolution-arrow">
                    <div class="evolution-trigger">${capitalize(clickedPkmn.secndEvolution.trigger)}</div>
                    <div class="evolution-level">${clickedPkmn.secndEvolution.levelup.includes("null") ? capitalize(clickedPkmn.secndEvolution.item ? clickedPkmn.secndEvolution.item : "") : returnIfTrue(clickedPkmn.secndEvolution.levelup)}</div>
                </div>
                <div class="flex-center flex-column">
                    <div class="popup-evolution flex-center third-evolution"><img src="${secndPkmnSprite}" alt="evolution"></div>
                    <div class="evolution-name">${capitalize(pkmn)}</div>
                </div>
            </div>        
        `);
    }


    // Displays Third Evolution of clicked Pkmn if existent
    const addThirdEvolution = pkmn => {
        let thirdPkmnSprite;

        if (getAllGenPkmnNames(allPokemon).includes((clickedPkmn.thirdEvolution.thirdName) || (clickedPkmn.secndEvolution.secndName) || (clickedPkmn.firstEvolution))) {
            thirdPkmnSprite = filterEvolution(clickedPkmn.thirdEvolution.thirdName).sprite;
        } else {
            thirdPkmnSprite = fetchMissingSprite(clickedPkmn.thirdEvolution.thirdName);
        }

        document.querySelector("#evolutions-cont").insertAdjacentHTML("beforeend", `
            <div class="popup-evolution-box flex-center">
                <div class="popup-evolution-arrow second-evolution-arrow">
                    <div class="evolution-trigger">${capitalize(clickedPkmn.thirdEvolution.trigger)}</div>
                    <div class="evolution-level">${clickedPkmn.thirdEvolution.levelup.includes("null") ? capitalize(clickedPkmn.thirdEvolution.item) : returnIfTrue(clickedPkmn.thirdEvolution.levelup)}</div>
                </div>
                <div class="flex-center flex-column">
                    <div class="popup-evolution flex-center third-evolution"><img src="${thirdPkmnSprite}"  alt="evolution"></div>
                    <div class="evolution-name">${capitalize(pkmn)}</div>
                </div>
            </div>        
        `);
    }


    // Displays Mega Evolution of clicked Pkmn if existent
    const addMegaEvolution = () => {
        let thirdPkmnSprite;

        if (getAllGenPkmnNames(allPokemon).includes((clickedPkmn.thirdEvolution.thirdName) || (clickedPkmn.secndEvolution.secndName) || (clickedPkmn.firstEvolution))) {
            thirdPkmnSprite = filterEvolution(clickedPkmn.finalEvolution).sprite;
        } else {
            thirdPkmnSprite = finalEvolutionSprite;
        }

        // selects 'evolution container' in DOM & inserts Mega Evolution HTML-block
        document.querySelector("#evolutions-cont").insertAdjacentHTML("beforeend", `
            <div class="mega-evolution-cont flex-center">
                <div class="flex-center flex-column">
                    <div class="popup-evolution flex-center first-evolution"><img src="${thirdPkmnSprite}" alt="evolution"></div>
                    <div class="evolution-name">${capitalize(clickedPkmn.finalEvolution)}</div>
                </div>
                <div class="popup-evolution-box flex-center">
                <div class="popup-evolution-arrow first-evolution-arrow">
                    <div class="evolution-trigger">Mega Stone</div>
                    <div class="evolution-level"><img class="mega-stone-img" src="assets/img/megastone.png"></div>
                </div>
                <div class="flex-center flex-column">
                    <div class="popup-evolution flex-center second-evolution"><img src="assets/img/mega_${clickedPkmn.finalEvolution}.png" alt="mega evolution"></div>
                    <div class="evolution-name">Mega ${capitalize(clickedPkmn.finalEvolution)}</div>
                </div>
                </div>
            </div>
        `);
    }


    addFirstEvolution();
    if (clickedPkmn.secndEvolution) {
        addSecndEvolution(clickedPkmn.secndEvolution.secndName);

        if (clickedPkmn.thirdEvolution) {
            addThirdEvolution(clickedPkmn.thirdEvolution.thirdName);
        }
    }
    if (clickedPkmn.isMega) {
        addMegaEvolution();
    }
}


// ----------------------------------------------------------------------------- TYPE ADVANTAGES (API CALL)

// Takes current type as input and fetches and modifies the api (pokemon api -type- endpoint)
const getTypeAdv = type => {
    addHiddenToTabs();
    typeAdvTab.classList.remove("hidden");
    popupTabBtns[3].classList.add("selected-tab");
    typeAdvWeakness = true;
    weaknessAdv = true;

    // Type Adv Api call
    fetch(`https://pokeapi.co/api/v2/type/${type}`).then(res => res.json()).then(data => {
        // Creates array with normal Demage
        const calculateNormalD = (all, full) => {
            let normalDmg = [];

            all.forEach(a => {
                if (!full.includes(a)) {
                    normalDmg.push(a);
                }
            });
            return normalDmg;
        }

        // assigns arrays with data - double/half/nomal/no demage from/to to global vars 
        doubleDTo = data.damage_relations.double_damage_to.map(dd => dd.name);
        doubleDFrom = data.damage_relations.double_damage_from.map(dd => dd.name);
        halfDTo = data.damage_relations.half_damage_to.map(hd => hd.name);
        halfDFrom = data.damage_relations.half_damage_from.map(hd => hd.name);
        noDTo = data.damage_relations.no_damage_to.map(nd => nd.name);
        noDFrom = data.damage_relations.no_damage_from.map(nd => nd.name);

        // 
        allTypes = [...Object.keys(allColors)]
        fullArr = [...new Set(doubleDTo.concat(doubleDFrom, halfDTo, halfDFrom, noDTo, noDFrom))];
        normalD = calculateNormalD(allTypes, fullArr);
        // 
        displayAllTypesTab();

    }).catch(err => console.error(err));
}


// ----------------------------------------------------------------------------- Change Between Weaknesses and Advantages

// Btns - switches between weaknesses/advs.
const changeWeaknessAdv = (e) => {
    const AdvBtns = document.querySelectorAll(".swich-to-weakn-adv-btn");

    weaknessAdv = weaknessAdv ? false : true;
    weaknessAdv ? AdvBtns[0].classList.add("selected-adv") : AdvBtns[1].classList.add("selected-adv");

    (e.target.innerText.toLowerCase() === "weaknesses") ? typeAdvWeakness = true : typeAdvWeakness = false;

    displayAllTypesTab();
}


// Displays All Type Adv. in Tab
const displayAllTypesTab = () => {
    typeAdvTab.innerHTML = `
        <div class="switch-weakn-adv-btn-cont flex-center">
            <button onclick="changeWeaknessAdv(event)" class="swich-to-weakn-adv-btn ${weaknessAdv ? 'selected-adv' : 'not'}">Weaknesses</button>
            <button onclick="changeWeaknessAdv(event)" class="swich-to-weakn-adv-btn ${!weaknessAdv ? 'selected-adv' : 'not'}">Advantages</button>
        </div>
    `;
    for (let color in allColors) {
        typeAdvTab.insertAdjacentHTML("beforeend", `
            <div class="adv-type-cont flex-center flex-column">
                <div class="adv-type" style="background-color: ${allColors[color]}">${capitalize(color)}</div>
                <div class="adv-value">x${typeAdvWeakness ? dispTypeAdvValue(doubleDFrom, halfDFrom, noDFrom, color) : dispTypeAdvValue(doubleDTo, halfDTo, noDTo, color)}</div>
            </div>
        `);
    }
}


// Displays all values (weakn./adv.) depending on clicked btn
const dispTypeAdvValue = (double, half, noD, type) => {
    if (double.includes(type)) {
        return 2;
    } else if (half.includes(type)) {
        return "1/2";
    } else if (noD.includes(type)) {
        return 0;
    } else {
        return 1;
    }
}


// ----------------------------------------------------------------------------- MOVE TAB

// Displays Moves of clicked Pokemon
const displayMoves = pkmn => {
    addHiddenToTabs();
    movesTab.classList.remove("hidden");
    popupTabBtns[4].classList.add("selected-tab");

    displayLvMoves(pkmn);
}


// Resets Moves Container
const resetMovesContainer = () => {
    displMovesContainer.innerHTML = `
        <div class="popup-move-descr-cont flex-center flex-column opacity"></div>
        <div class="moves-category-btn-cont flex-center">
            <div onclick="displayLvMoves(clickedPkmn)" class="moves-category-btn">Level</div>
            <div onclick="displayTmMoves(clickedPkmn)" class="moves-category-btn">Tm/Vm</div>
            <div onclick="displayTutMoves(clickedPkmn)" class="moves-category-btn">Tutor</div>
            <div onclick="displayEggMoves(clickedPkmn)" class="moves-category-btn">Egg</div>
        </div> 
    `;
}


// Removes all Selected classes from Btns
const remSelectedClassesBtns = btnIndex => {
    const movesCatBtns = document.querySelectorAll(".moves-category-btn");

    movesCatBtns.forEach(btn => btn.classList.remove("selectedBtn"));
    movesCatBtns[btnIndex].classList.add("selectedBtn");
}


// Displays all Moves a pkmn learns via Lv-Up
const displayLvMoves = pkmn => {
    resetMovesContainer();
    remSelectedClassesBtns(0);

    const sortedLvMoves = pkmn.movesLv.sort((a, b) => a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at);

    sortedLvMoves.forEach(m => {
        displMovesContainer.insertAdjacentHTML("beforeend", `
            <div class="popup-move flex-center flex-column">
                <div class="move-lv">Lv. ${m.version_group_details[0].level_learned_at}</div>
                <div onclick="getMoveData(event)" class="move-name" style="background-color:crimson; font-size: ${moveElementSize(pkmn.movesLv)}">${capitalize(m.move.name)}</div>
            </div>
        `);
    });
}


// Displays all Moves a pkmn learns via Tutor
const displayTutMoves = pkmn => {
    resetMovesContainer();
    remSelectedClassesBtns(2);

    pkmn.movesTut.forEach(m => {
        displMovesContainer.insertAdjacentHTML("beforeend", `
            <div class="popup-move flex-center flex-column">
                <div onclick="getMoveData(event)" class="move-name" style="background-color:crimson; font-size: ${moveElementSize(pkmn.movesTut)}">${capitalize(m.move.name)}</div>
            </div>
        `);
    });
}


// Displays all Moves a pkmn learns via Egg moves
const displayEggMoves = pkmn => {
    resetMovesContainer();
    remSelectedClassesBtns(3);

    pkmn.movesEgg.forEach(m => {
        displMovesContainer.insertAdjacentHTML("beforeend", `
                <div class="popup-move flex-center flex-column">
                    <div onclick="getMoveData(event)" class="move-name" style="background-color:crimson; font-size: ${moveElementSize(pkmn.movesEgg)}">${capitalize(m.move.name)}</div>
                </div>
            `);
    });
}


// Changes font size depending of amout of moves (the more moves are getting displayed - smaller font size)
const moveElementSize = moves => {
    if (moves.length <= 13) {
        return "1.3em";
    } else if (moves.length > 13 && moves.length < 45) {
        return "1.1em";
    } else if (moves.length > 100) {
        return ".8em";
    } else if (moves.length > 70) {
        return ".85em";
    } else if (moves.length > 45) {
        return ".9em";
    }
}


// Displays all Moves a pkmn learns via Machine (Tm)
const displayTmMoves = pkmn => {
    resetMovesContainer();
    remSelectedClassesBtns(1);

    pkmn.movesTm.forEach(m => {
        displMovesContainer.insertAdjacentHTML("beforeend", `
            <div class="popup-move flex-center flex-column">
                <div onclick="getMoveData(event)" class="move-name" style="background-color:crimson; font-size: ${moveElementSize(pkmn.movesTm)};">${capitalize(m.move.name)}</div>
            </div>
        `);
    });
}


// Gets Machine Move (Tm) data
const fetchTmData = move => {
    const addSpaceTmName = name => capitalize(name.charAt(0)) + capitalize(name.slice(1, 2)) + name.substring(2);

    // Api call for Tm Move
    fetch(move.url).then(res => res.json()).then(data => {
        fetch(data.machines[0].machine.url).then(res => res.json()).then(tm => {

        }).catch(err => console.error(err));

    }).catch(err => console.error(err));
}


// ----------------------------------------------------------------------------- MOVE API CALL

// Takes clicked move as input and fetches and modifies the api (pokemon api -move- endpoint)
const getMoveData = e => {
    let move = e.target.innerText.toLowerCase();

    // Displays Effect chance of move
    const insertEffectChance = (txt, data) => {
        if (txt.includes("$effect_chance%")) {
            return txt.replace("$effect_chance", (data).toString());
        }
        return txt;
    }

    // Displays the genetarion roman number in uppercase
    const dispGeneration = (gen) => (gen.slice(11).toUpperCase());

    // Displays maximum power points - by 5 or by 3
    const dispMaxPP = (pp) => pp > 5 ? pp + 5 : pp + 3;

    // Fetches and modifies Move Data (all relevant data to display)
    fetch(`https://pokeapi.co/api/v2/move/${move}`).then(res => res.json()).then(data => {
        let formattedMove = {};

        // relevant data
        formattedMove = {
            pp: data.pp,
            name: data.name,
            power: data.power,
            type: data.type.name,
            drain: data.meta.drain,
            accuracy: data.accuracy,
            category: data.damage_class.name,
            generation: data.generation.name,
            flinchChance: data.meta.flinch_chance,
            moveDescrTxt: data.flavor_text_entries[4].flavor_text,
            contest: data.contest_type ? data.contest_type.name : "None",
            effectChance: data.effect_chance ? data.effect_chance + "%" : "None",
            statChangeVal: data.stat_changes[0] ? data.stat_changes[0].change : "0",
            statChangeName: data.stat_changes[0] ? data.stat_changes[0].stat.name : "None",
            moveEffectTxt: insertEffectChance(data.effect_entries[0].short_effect, data.effect_chance)
        }

        // Fills Moves Description Container
        const fillMovesDescrCont = () => {
            movesDescrContainer.style.backgroundColor = allColors[formattedMove.type];
            movesDescrContainer.innerHTML = `
                <div onclick="toggleMoveDescrCont()" class="popup-move-descr-back-btn">&larr;</div>
                <div class="move-descr-name">${capitalize(formattedMove.name)}</div>
                    <div class="move-descr-grid">
                        <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-label" style="color: ${allColors[formattedMove.type]}">Move-Power</div>
                        <p>${formattedMove.power ? formattedMove.power : "—"}</p>
                    </div>
                    <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-label" style="color: ${allColors[formattedMove.type]}">Accuracy</div>
                        <p>${formattedMove.accuracy ? formattedMove.accuracy + "%" : "—"}</p>
                    </div>
                    <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-label" style="color: ${allColors[formattedMove.type]}">Category</div>
                        <p>${capitalize(formattedMove.category)}</p>
                    </div>
                    <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-label" style="color: ${allColors[formattedMove.type]}">Move-Type</div>
                        <p>${capitalize(formattedMove.type)}</p>
                    </div>
                    <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-label" style="color: ${allColors[formattedMove.type]}">Stat Change</div>
                        <p>${capitalize(formattedMove.statChangeName)}</p>
                    </div>
                    <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-label" style="color: ${allColors[formattedMove.type]}">Effect Chance</div>
                        <p>${formattedMove.effectChance}</p>
                    </div>
                    <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-labe style="color: ${allColors[formattedMove.type]}"" style="color: ${allColors[formattedMove.type]}">PP/Max PP</div>
                        <p>${formattedMove.pp}/${dispMaxPP(formattedMove.pp)}</p>
                    </div>
                    <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-label" style="color: ${allColors[formattedMove.type]}">Generation</div>
                        <p>${dispGeneration(formattedMove.generation)}</p>
                    </div>
                    <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-label" style="color: ${allColors[formattedMove.type]}">Stat Value</div>
                        <p>${formattedMove.statChangeVal}</p>
                    </div>
                    <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-label" style="color: ${allColors[formattedMove.type]}">Contests</div>
                        <p>${capitalize(formattedMove.contest)}</p>
                    </div>
                    <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-label" style="color: ${allColors[formattedMove.type]}">${formattedMove.drain > 0 ? "Drains Hp" : "Recoil"}</div>
                        <p>${formattedMove.drain ? formattedMove.drain : "0"}%</p>
                    </div>
                    <div class="move-descr-cont flex-center flex-column">
                        <div class="move-descr-label" style="color: ${allColors[formattedMove.type]}">Flinch Chance</div>
                        <p>${formattedMove.flinchChance ? formattedMove.flinchChance : "0"}%</p>
                    </div>
                    </div>
                    <div class="move-descr-txt">
                        ${formattedMove.moveEffectTxt}
                    </div>
                        <div class="move-descr-txt">
                        ${formattedMove.moveDescrTxt}
                    </div>
                `;
        }
        toggleMoveDescrCont();
        fillMovesDescrCont();

    }).catch(err => console.error(err));
}


// ----------------------------------------------------------------------------- NORMAL AND SPECIFIC FILTERS

// Changes Values on Slider depending on range-btn (From: Youtube, url: https://www.youtube.com/watch?v=pTlsnFLiK6c)
const displRangeSlider = sliderCategory => {
    let currentCategory;
    let allSorted;

    // removes all selected classes from Range BUTTONS
    rangeBtns.forEach(rb => rb.classList.remove("selected-range-tab"));

    // depending on clicked btn - 
    switch (sliderCategory) {
        case "id":
            allSorted = allPokemon.map(p => p.id).sort((a, b) => a - b);
            rangeBtns[1].classList.add("selected-range-tab");
            currentCategory = "";
            break;
        case "height":
            allSorted = allPokemon.map(p => p.height / 10).sort((a, b) => a - b);
            rangeBtns[0].classList.add("selected-range-tab");
            currentCategory = "m";
            break;
        case "weight":
            allSorted = allPokemon.map(p => p.weight).sort((a, b) => a - b);
            rangeBtns[2].classList.add("selected-range-tab");
            currentCategory = "kg";
    }
    sliderCat = sliderCategory;

    // minimum/maximum values
    let minMax = [Math.min(...allSorted), Math.max(...allSorted)];
    let values = [Math.floor(25 * minMax[1] / 100), Math.round(75 * minMax[1] / 100)];


    inputLeft.min = minMax[0];
    inputLeft.max = minMax[1];
    inputLeft.value = values[0];

    thumbLeft.style.left = 25 + "%";
    range.style.left = 25 + "%";

    inputRight.min = minMax[0];
    inputRight.max = minMax[1];
    inputRight.value = values[1];

    thumbLeft.style.right = 25 + "%";
    range.style.right = 25 + "%";

    rangeNumbers[0].innerText = minMax[0] + currentCategory;
    rangeNumbers[1].innerText = minMax[1] + currentCategory;
}


// Vars for R/L slider (Global!)
let firstRangeSlider;
let secndRangeSlider;
let sliderCat;

// Filters Id Range
const filterIdRange = () => {
    let filteredRange;
    let firstRangeSlider = parseInt(inputLeft.value);
    let secndRangeSlider = parseInt(inputRight.value);

    switch (sliderCat) {
        case "id":
            filteredRange = allPokemon.filter(p => p.id >= firstRangeSlider && p.id <= secndRangeSlider);
            break;
        case "height":
            filteredRange = allPokemon.filter(p => (p.height * 10) / 100 >= firstRangeSlider && (p.height * 10) / 100 <= secndRangeSlider);
            break;
        case "weight":
            filteredRange = allPokemon.filter(p => p.weight >= firstRangeSlider && p.weight <= secndRangeSlider);
    }
    pDexListContainer.innerHTML = "";
    fillPokemon(filteredRange);
    toggleSpecificSearch();
}


// Assigns filtered height range by clicking 
const filterHeight = (height, e) => {
    selectFilterRangeBtn(e.target);
    heightToFilter = height;
    weightToFilter = null;
}


// Assigns filtered weight range by clicking 
const filterWeight = (weight, e) => {
    selectFilterRangeBtn(e.target);
    weightToFilter = weight;
    heightToFilter = null;
}


// Assign selected class to Fil. Range Button
const selectFilterRangeBtn = btn => {
    filterRangeBtns.forEach(btn => btn.classList.remove("selected-wr-btn"));
    btn.classList.add("selected-wr-btn");
}


// Filters allPkmn by Weight Categories 
const specPokeFilterWeight = () => {
    let filteredByWeight;

    if (weightToFilter) {
        if (weightToFilter <= 20) {
            filteredByWeight = allPokemon.filter(p => p.weight <= 20);
            console.log(allPokemon.filter(p => p.weight <= 20))
        } else if (weightToFilter > 20 && weightToFilter <= 60) {
            filteredByWeight = allPokemon.filter(p => p.weight > 20 && p.weight <= 60);
        } else if (weightToFilter > 60 && weightToFilter <= 200) {
            filteredByWeight = allPokemon.filter(p => p.weight > 60 && p.weight <= 200);
        } else {
            filteredByWeight = allPokemon.filter(p => p.weight > 200);
        }

        let sortedRes = filteredByWeight.sort((a, b) => a.weight - b.weight);
        // Displays Pkmn
        fillPokemon(sortedRes);
        toggleSpecificSearch();
    } else {
        // alert if no weight button is selected
        alert("Weight is not selected! Please select a weight (light, mediumm, heavy, x-heavy)");
    }
}


// Filters allPkmn by Height Categories
const specPokeFilterHeight = () => {
    let filteredByHeight;

    if (heightToFilter) {
        if (heightToFilter <= 10) {
            filteredByHeight = allPokemon.filter(p => p.height <= 10);
        } else if (heightToFilter > 10 && heightToFilter <= 15) {
            filteredByHeight = allPokemon.filter(p => p.height > 10 && p.height <= 15);
        } else if (heightToFilter > 15 && heightToFilter <= 20) {
            filteredByHeight = allPokemon.filter(p => p.height > 15 && p.height <= 20);
        } else {
            filteredByHeight = allPokemon.filter(p => p.height > 20);
        }

        let sortedRes = filteredByHeight.sort((a, b) => a.height - b.height);
        // Displays Pkmn
        fillPokemon(sortedRes);
        toggleSpecificSearch();
    } else {
        // alert if no height button is selected
        alert("Height is not defined! Please select a size (small, medium, large, x-large)");
    }
}


// ----------------------------------------------------------------------------- RANGE SLIDER

// Range Sliders (Global)
let inputLeft = document.querySelector("#range-left");
let inputRight = document.querySelector("#range-right");

let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");
let range = document.querySelector(".slider > .range");


// Sets the value of left Slider
const setLeftValue = () => {
    let _this = inputLeft;
    let min = parseInt(_this.min);
    let max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    let percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";

    rangeValue[0].innerText = inputLeft.value;
}
setLeftValue();


// Sets the value of right Slider
const setRightValue = () => {
    let _this = inputRight;
    let min = parseInt(_this.min);
    let max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    let percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";

    rangeValue[1].innerText = inputRight.value;
}
setRightValue();


// HOVER / Mouseover functions for Slider Thumbs
inputLeft.addEventListener("mouseover", () => {
    thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", () => {
    thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", () => {
    thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", () => {
    thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", () => {
    thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", () => {
    thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", () => {
    thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", () => {
    thumbRight.classList.remove("active");
});


// ----------------------------------------------------------------------------- SCROLL TO TOP / BOTTOM BUTTONS

// Scroll to top Button
const scrollToTop = () => {
    $('html, body').animate({
        scrollTop: 0
    }, 'fast');
}


// Scroll to bottom Button
const scrollToBottom = () => {
    $("html, body").animate({
        scrollTop: $(document).height()
    }, {
        duration: 300,
        specialEasing: {
            width: "linear",
            height: "easeOutBounce"
        }
    });
}


// ----------------------------------------------------------------------------- FAVORITE PKMN

// Checks if Pkmn is Favorite (heart red/hollow)
const checkIfPkmIsFav = () => {
    let currentFavs = JSON.parse(localStorage.getItem("favs"));
    currentFavs.forEach(a => {
        console.log(a.id === clickedPkmn.id)
    })

    return currentFavs.filter(fav => fav.id === clickedPkmn.id).length > 0 ? favoritePkmnBtn.innerHTML = `<i class="fas fa-heart"></i>` : favoritePkmnBtn.innerHTML = `<i class="far fa-heart"></i>`;
}


// Checks if favs is already in localSt.
const checkForFavsInLocalStorage = () => localStorage.getItem("favs") === null ? localStorage.setItem("favs", JSON.stringify([])) : favoritePkmnCounter = JSON.parse(localStorage.getItem("favs")).length;


// Adds a pkmn to favs (local storage), toggles heart icon
const favoritePkmn = () => {
    let currentFavs = JSON.parse(localStorage.getItem("favs"));

    if (favoritePkmnCounter >= 10) {
        alert("Sorry, You can favorize only 10 Pokemon");
    }

    if (favoritePkmnCounter < 10 && favoritePkmnBtn.children[0].classList.contains("far")) {
        favoritePkmnCounter++;
        currentFavs.push(clickedPkmn);
        favoritePkmnBtn.innerHTML = `<i class="fas fa-heart"></i>`;
    } else {
        favoritePkmnCounter--;
        currentFavs = currentFavs.filter(fav => fav.id !== clickedPkmn.id);
        favoritePkmnBtn.innerHTML = `<i class="far fa-heart"></i>`;
    }
    window.localStorage.setItem("favs", JSON.stringify(currentFavs));
}


// Displays all Fav. Pkmn in Pdl-Cont
const displFavoritePkmn = (e) => {
    let currentFavs = JSON.parse(localStorage.getItem("favs"));

    clearFavsBtnActive = true;
    assignSelectedGenBtn(e.target);
    fillPokemon(currentFavs);
}


// Removes all Favorite Pkmn
const clearFavoritePkmn = () => {
    window.localStorage.setItem("favs", JSON.stringify([]));
    fillPokemon(JSON.parse(localStorage.getItem("favs")));
}
