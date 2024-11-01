///////////////////////////////////////////////////
//Opacity Slider
///////////////////////////////////////////////////
/*const opSlider = document.getElementById('opacity-container');
if(opSlider){
    opSlider.addEventListener('input', (v) => {
        _2024.setPaintProperty('2024_results', 'fill-opacity', (+v.target.value / 100))
        _2020.setPaintProperty('2020_results', 'fill-opacity', (+v.target.value / 100))
    })
}
*/

///////////////////////////////////////////////////
//Legend
///////////////////////////////////////////////////
/*const legend = document.getElementById('legend');
if (legend) {
    for (let i = 0; i < colorScale.length; i++) {
        legend.innerHTML += `
    <div class="legend-item">
        <span style="display:inline-block;width:16px; height:16px;background-color:${colorScale[i].color}"></span>
        <span class="pct">${colorScale[i].label}</span >
    </div > `
    }
}*/

///////////////////////////////////////////////////
//Update UI
///////////////////////////////////////////////////
function updateUI() {
    ////////////////////////////////////////////////
    const pctBiden2020 = document.querySelector("#percents #biden-2020");
    pctBiden2020.innerHTML = getInnerHtml('Biden', store.hoveredDistricts._2020.pct.dem, true)

    const pctTrump2020 = document.querySelector("#percents #trump-2020");
    pctTrump2020.innerHTML = getInnerHtml('Trump', store.hoveredDistricts._2020.pct.gop, true)

    ////////////////////////////////////////////////

    const pctHarris2024 = document.querySelector("#percents #harris-2024");
    pctHarris2024.innerHTML = getInnerHtml('Harris', store.hoveredDistricts._2024.pct.dem, true)

    const pctTrump2024 = document.querySelector("#percents #trump-2024");
    pctTrump2024.innerHTML = getInnerHtml('Trump', store.hoveredDistricts._2024.pct.gop, true)

    ////////////////////////////////////////////////

    const demDeltaPct = document.querySelector("#percents #dem-delta");
    demDeltaPct.innerHTML = getInnerHtml('DEM', store.hoveredDistricts.delta.pct.dem.toFixed(1), true)

    const gopDeltaPct = document.querySelector("#percents #gop-delta");
    gopDeltaPct.innerHTML = getInnerHtml('GOP', store.hoveredDistricts.delta.pct.gop.toFixed(1), true)

    ////////////////////////////////////////////////

    const numBiden2020 = document.querySelector("#numbers #biden-2020");
    numBiden2020.innerHTML = getInnerHtml('Biden', Math.round(store.hoveredDistricts._2020.numVotes.dem, false))

    const numTrump2020 = document.querySelector("#numbers #trump-2020");
    numTrump2020.innerHTML = getInnerHtml('Trump', Math.round(store.hoveredDistricts._2020.numVotes.gop, false))

    ////////////////////////////////////////////////

    const numHarris2024 = document.querySelector("#numbers #harris-2024");
    numHarris2024.innerHTML = getInnerHtml('Harris', Math.round(store.hoveredDistricts._2024.numVotes.dem, false))

    const numTrump2024 = document.querySelector("#numbers #trump-2024");
    numTrump2024.innerHTML = getInnerHtml('Trump', Math.round(store.hoveredDistricts._2024.numVotes.gop, false))

    ////////////////////////////////////////////////

    const demDelta = document.querySelector("#numbers #dem-delta");
    demDelta.innerHTML = getInnerHtml('DEM', Math.round(store.hoveredDistricts.delta.numVotes.dem.toFixed(1), false))

    const gopDelta = document.querySelector("#numbers #gop-delta");
    gopDelta.innerHTML = getInnerHtml('GOP', Math.round(store.hoveredDistricts.delta.numVotes.gop.toFixed(1), false))

    ////////////////////////////////////////////////

    const delta2020 = document.querySelector("#numbers #dem-delta");
    delta2020.innerHTML = getInnerHtml('DEM', Math.round(store.hoveredDistricts.delta.numVotes.dem.toFixed(1), false))

    const delta2024 = document.querySelector("#numbers #gop-delta");
    delta2024.innerHTML = getInnerHtml('GOP', Math.round(store.hoveredDistricts.delta.numVotes.gop.toFixed(1), false))


    ////////////////////////////////////////////////
    const total2020Num = document.querySelector("#numbers #total-2020");
    total2020Num.innerHTML = getInnerHtml('Total', Math.round(store.hoveredDistricts._2020.numVotes.total, false))

    const total2024Num = document.querySelector("#numbers #total-2024");
    total2024Num.innerHTML = getInnerHtml('Total', Math.round(store.hoveredDistricts._2024.numVotes.total, false))

    const totalDeltaNum = document.querySelector("#numbers #total-delta");
    totalDeltaNum.innerHTML = getInnerHtml('Total', Math.round(store.hoveredDistricts._2024.numVotes.total + store.hoveredDistricts._2020.numVotes.total, false))

    const edContainers = Array.from(document.getElementsByClassName('ed'))

    edContainers.forEach(el => el.innerHTML = `(District ${store.hoveredDistricts.ed})`)
}

function getInnerHtml(title, value, _pct) {
    return `<span style="float:left" > ${title}</span > <span style="float:right">${value}${_pct ? '%' : ''}</span>`
}