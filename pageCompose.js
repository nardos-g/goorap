const header = document.querySelector('.title')
const footer = document.querySelector('footer')

// inject header code from a local html file
fetch('./nav.html').then(res => res.text()).then(text => {
    header.innerHTML = text
})

// inject the footer code automatically
fetch('./footer.html').then(res => res.text()).then(text => {
    footer.innerHTML = text
})

// To Create Table from a local html file
function branchTable(event) {

    fetch('./serviceCenters.json').then(res => res.text()).then(json => {
        const Data = JSON.parse(json)
        const country = selected()
    
        if(country !== null) {
            console.log("entered");
            const table = document.querySelector('table')
            table.innerHTML = ''
            const tr = document.createElement('tr')
            
            const header = ['Sr#', 'Branch', 'Tel No', 'Email'].map(hName => {
                const th = document.createElement('th')
                th.innerHTML =hName
                return th
            })
    
            tr.append(...header)
            table.append(tr)
        }
    
        const branches = Data[country]
    
        Object.keys(branches).map((branch, index )=> {
            const data = [index + 1, branch, branches[branch]['Tel No'], branches[branch]['Email']]
            rowCreater(data)
        })
    
    })
    
}


function selected() {
    const select = document.querySelector('#location')
    return select.value
}

function rowCreater(data) {
    const table = document.querySelector('table')

    const tr = document.createElement('tr')
    const row = data.map(dat => {
        const td = document.createElement('td')
        td.innerHTML = dat
        console.log(td)
        return td
    })

    tr.append(...row)
    console.log(tr)
    table.appendChild(tr)
}


function openMenu() {
    const open = document.querySelector('.mobileMenu')
    if(open.style.display == 'block'){
        open.style.display = 'none'
    }else{
        open.style.display = 'block'
    }
}

function openSubMenu(ele) {
    console.log("The event is dispatched", ele)
    const subMenu = ele.querySelector('.mobileMenu-list')

    if(subMenu.style.display === 'block'){
        subMenu.style.display = 'none'
    }else{
        subMenu.style.display = 'block'
    }
}

function signUp() {
    const modal = document.querySelector('.modal')
    if(modal.style.display === "block"){
        modal.style.display = 'none'
    }else{
        modal.style.display = 'block'
    }
}

// window.addEventListener('load', (event) => {
//     const scrollWrapper = document.querySelector('.Scroll')
//     setInterval(() => (
//         scrollWrapper.scrollBy(5, 0)
//     ), 40)
// })

function horizontalScroll() {
}