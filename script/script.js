const modsContainer = document.getElementById('mods-container');

function createModCard(title, description, thumbnail, downloadLink, imageLink) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-4');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'mb-4', 'box-shadow');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = thumbnail;
    img.alt = 'Mod Thumbnail';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = description;

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');

    const viewBtn = document.createElement('a');
    viewBtn.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
    viewBtn.textContent = 'Ver';
    viewBtn.href = imageLink; // Link da imagem para o botão "Ver"
    viewBtn.setAttribute('target', '_blank'); // Abre o link em uma nova aba

    const downloadBtn = document.createElement('a');
    downloadBtn.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
    downloadBtn.textContent = 'Baixar';
    downloadBtn.href = downloadLink; // Link de download para o mod
    downloadBtn.setAttribute('target', '_blank'); // Abre o link em uma nova aba

    btnGroup.appendChild(viewBtn);
    btnGroup.appendChild(downloadBtn);

    const smallText = document.createElement('small');
    smallText.classList.add('text-muted');
    smallText.textContent = 'Recentemente adicionado';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btnGroup);
    cardBody.appendChild(smallText);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    colDiv.appendChild(cardDiv);

    return colDiv;
}

// Dados dos mods
const mods = [
    { 
        title: 'Nissan Silvia S15 GP Sport Street', 
        description: 'Potência: 383 cv\nTorque: 48 kgfm\n0-100 km/h: 5s\nPeso: 1270 kg\nVersão: v1.0\nAno: 2000\nCreditos: SegaHellaFlush', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2023/02/preview-6.jpg', 
        downloadLink: 'https://modsfire.com/16icvlQ97Dj10jY',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2023/02/preview-6.jpg'
    },

    { 
        title: 'Toyota Supra A80 TBK', 
        description: 'Potência: 502 cv\nTorque: 72.2 kgfm\n0-100 km/h: 5s\nPeso: 1505 kg\nVersão: N/D\nAno: 1993\nCreditos: Jaskier', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2023/09/preview-44.jpg', 
        downloadLink: 'https://modsfire.com/n54spTqVwomiG74',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2023/09/preview-44.jpg'
    },

    { 
        title: 'Nissan Silvia S13 (G-Corporation)', 
        description: 'Potência: 421 cv\nTorque: 47.4 kgfm\n0-100 km/h: 5s\nPeso: 1215 kg\nVersão: N/D\nAno: 1993\nCreditos: Aspire', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2023/09/preview-37.jpg', 
        downloadLink: 'https://modsfire.com/NTzMN5arITtNZIO',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2023/09/preview-37.jpg'
    },

    { 
        title: 'Nissan GTR-R34 V-Spec - No Hesi Spec', 
        description: 'Potência: 1237 cv\nTorque: 121 kgfm\n0-100 km/h: 1.9s\nPeso: 1560 kg\nVersão: v1.2\nAno: 2000\nCreditos: No Hesi, Hijacked', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2023/08/preview-89.jpg', 
        downloadLink: 'https://modsfire.com/iV0XkmTLY7T1E3U',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2023/08/preview-89.jpg'
    },

    { 
        title: 'Nissan GTR-R35 DKD - Darren Kelly', 
        description: 'Potência: 1094 cv\nTorque: 126 kgfm\n0-100 km/h: N/D\nPeso: 1270 kg\nVersão: v1.0\nAno: 2012\nCreditos: Kain McGonagle', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2022/01/preview-41.jpg?w=1022', 
        downloadLink: 'https://sharemods.com/uxxgw2zoahym/dkd_nissan_r35_gtr.rar.html',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2022/01/preview-41.jpg?w=1022'
    },

    { 
        title: 'Nissan GTR-R33 Public AMF', 
        description: 'Potência: 1087 cv\nTorque: 104.7 kgfm\n0-100 km/h: 3s\nPeso: 1301 kg\nVersão: v1.0\nAno: 1997\nCreditos: AMF-AntiMaterialFab', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2023/06/preview-96.jpg', 
        downloadLink: 'https://sharemods.com/uxxgw2zoahym/dkd_nissan_r35_gtr.rar.html',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2023/06/preview-96.jpg'
    },

    { 
        title: 'BMW M4 CS', 
        description: 'Potência: 460 cv\nTorque: 60 kgfm\n0-100 km/h: 3.9s\nPeso: 1580 kg\nVersão: v2.0\nAno: 2017\nCreditos: Cony#7897', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2023/12/preview-37.jpg', 
        downloadLink: 'https://modsfire.com/w1uF3M31J67kon5',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2023/12/preview-37.jpg'
    },

    { 
        title: 'Toyota Supra JZA80 Paris Spec', 
        description: 'Potência: 921 cv\nTorque: 76.9 kgfm\n0-100 km/h: N/D\nPeso: 1510 kg\nVersão: v1.8\nAno: 1997\nCreditos: KS and Arch x Paris', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2023/08/preview-100.jpg', 
        downloadLink: 'https://modsfire.com/H8gn851cGa2gJk0',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2023/08/preview-100.jpg'
    },

    { 
        title: 'Mazda RX-7 Veilside Fortune', 
        description: 'Potência: 306 cv\nTorque: 35.38 kgfm\n0-100 km/h: N/D\nPeso: 1050 kg\nVersão: N/D\nAno: N/D\nCreditos: N/D', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2021/01/preview-20.jpg?w=1022', 
        downloadLink: 'https://sharemods.com/8eo2w80ap41g/Mazda_RX-7_Veilside_Fortune_by_Assettogarage_for_AC_v1.14.3.7z.html',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2021/01/preview-20.jpg?w=1022'
    },

    { 
        title: 'Nissan Silvia S14 Zenki 2.0 VDC', 
        description: 'Potência: 1094 cv\nTorque: 125.8 kgfm\n0-100 km/h: N/D\nPeso: 1200 kg\nVersão: N/D\nAno: 1993\nCreditos: VDC', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2023/01/preview-46.jpg', 
        downloadLink: 'https://modsfire.com/854S4iJze3N9i88',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2023/01/preview-46.jpg'
    },

    { 
        title: 'Nissan GTR-R35 DAMP Public 2.0 VDC', 
        description: 'Potência: 1066 cv\nTorque: 119.9 kgfm\n0-100 km/h: N/D\nPeso: 1289 kg\nVersão: N/D\nAno: 2017\nCreditos: VDC', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2022/10/preview-153.jpg', 
        downloadLink: 'https://modsfire.com/ZU1IA9dfAn8wpT8',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2022/10/preview-153.jpg'
    },

    { 
        title: 'Gol Quadrado Wangan Midnight Brazil', 
        description: 'Potência: 500 cv\nTorque: 61.2 kgfm\n0-100 km/h: 10.2s\nPeso: 1119 kg\nVersão: N/D\nAno: 1994\nCreditos: Riciere Design', 
        thumbnail: 'https://brasilsimulatormods.com/wp-content/uploads/2023/11/preview-28.jpg', 
        downloadLink: 'https://www.mediafire.com/file/xientazsdiz3evu/mgst_gol_wangan.rar/file',
        imageLink: 'https://brasilsimulatormods.com/wp-content/uploads/2023/11/preview-28.jpg'
    },
];

function sortModsByName() {
    mods.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
}

function renderMods(modsArray) {
    renderModsByName(modsArray);
}

function renderModsByName(modsArray) {
    modsContainer.innerHTML = '';
    modsArray.forEach(mod => {
        const modCard = createModCard(mod.title, mod.description, mod.thumbnail, mod.downloadLink, mod.imageLink);
        modsContainer.appendChild(modCard);
    });
}

let isSortedByName = false;

function sortMods() {
    if (!isSortedByName) {
        sortModsByName();
        renderModsByName(mods);
        isSortedByName = true;
    } else {
        mods.reverse();
        renderModsByName(mods);
        isSortedByName = false;
    }
}

function filterMods() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const cards = modsContainer.getElementsByClassName('col-md-4');

    let noResults = true;
    let resultsCount = 0; // Contador de resultados

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector('.card-title');
        if (title.textContent.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = '';
            noResults = false;
            resultsCount++; // Incrementa o contador de resultados
        } else {
            cards[i].style.display = 'none';
        }
    }

    const existingNoResultsMessage = modsContainer.querySelector('.col-12.text-center');
    const existingResultCount = modsContainer.querySelector('.result-count');

    if (noResults && !existingNoResultsMessage) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.classList.add('col-12', 'text-center', 'mt-3');
        noResultsMessage.textContent = 'Nenhum resultado encontrado.';
        modsContainer.appendChild(noResultsMessage);

        if (existingResultCount) {
            existingResultCount.remove();
        }
    } else if (!noResults && existingNoResultsMessage) {
        existingNoResultsMessage.remove();
    }

    if (resultsCount > 0) {
        if (existingResultCount) {
            existingResultCount.textContent = `${resultsCount} resultado(s) encontrado(s)`;
        } else {
            const resultCount = document.createElement('div');
            resultCount.classList.add('col-12', 'text-center', 'result-count');
            resultCount.textContent = `${resultsCount} resultado(s) encontrado(s)`;
            modsContainer.insertBefore(resultCount, modsContainer.firstChild);
        }
    } else if (existingResultCount) {
        existingResultCount.remove();
    }
}

function toggleSearch() {
    const input = document.getElementById('searchInput');
    input.focus();
}

window.addEventListener('DOMContentLoaded', () => {
    renderMods(mods);
    document.getElementById('searchInput').addEventListener('keyup', filterMods);
});
