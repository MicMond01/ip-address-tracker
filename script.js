
const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_XS3NamG41mo8Q2pXdd5lxT5mhHC3w"



let ip_value = document.getElementById("ip")
let address_value = document.getElementById("location")
let timezone_value = document.getElementById("timezone")
let isp_value = document.getElementById("isp")

const search_btn = document.getElementById("button")
const input_value = document.getElementById("input")




const map = L.map('map-view', {
    'center': [0,0],
    'zoom': 0,
    'layers': [
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> '
        })
    ]
})



const updateMarker = (update_pointer = [-42, 42]) => {
    map.setView(update_pointer, 13)
    L.marker(update_pointer).addTo(map)
}




const getIPDetails = (default_ip) => {
    if (default_ip == undefined) {
        var ip_url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_XS3NamG41mo8Q2pXdd5lxT5mhHC3w"
    } else {
        var ip_url = `${url}&ipAddress=${default_ip}`
        
    }


    const fetchIp = async () => {
    
    
        response = await fetch(ip_url)
        const json_res = await response.json()
        
        // console.log(json_res)
        
        ip_value.innerHTML = json_res.ip
        address_value.innerHTML = `${json_res.location.city}, ${json_res.location.country}${json_res.location.postalCode}`
        timezone_value.innerHTML = json_res.location.timezone
        isp_value.innerHTML = json_res.isp

        updateMarker([json_res.location.lat, json_res.location.lng])
    }

    fetchIp()
}





getIPDetails()


document.addEventListener('load', updateMarker())


search_btn.addEventListener('click', e => {
    e.preventDefault()
    
    if(input_value.value != '' && input_value.value != null){
        getIPDetails(input_value.value)
        return
    }
    
    alert("Please enter a valid IP address")
})













// const getIPDetails = (default_ip) => {
//     if (default_ip == undefined) {
//         var ip_url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_XS3NamG41mo8Q2pXdd5lxT5mhHC3w"
//     } else {
//         var ip_url = `${url}&ipAddress=${default_ip}`
        
//     }


//     const fetchIp = async () => {
    
    
//         response = await fetch(ip_url)
//         const json_res = await response.json()
        
//         // console.log(json_res)
        
//         ip_value.innerHTML = json_res.ip
//         address_value.innerHTML = `${json_res.location.city}, ${json_res.location.country}${json_res.location.postalCode}`
//         timezone_value.innerHTML = json_res.location.timezone
//         isp_value.innerHTML = json_res.isp

//         updateMarker([json_res.location.lat, json_res.location.lng])
//     }

//     fetchIp()
// }

// const getIPDetails = (default_ip) => {
//     if (default_ip == undefined) {
//         var ip_url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_XS3NamG41mo8Q2pXdd5lxT5mhHC3w"
//     } else {
//         var ip_url = `${url}&ipAddress=${default_ip}`
        
//     }


//     const fetchIp = async () => {
    
    
//         response = await fetch(ip_url)
//         const json_res = await response.json()
        
//         // console.log(json_res)
        
//         ip_value.innerHTML = json_res.ip
//         address_value.innerHTML = `${json_res.location.city}, ${json_res.location.country}${json_res.location.postalCode}`
//         timezone_value.innerHTML = json_res.location.timezone
//         isp_value.innerHTML = json_res.isp

//         updateMarker([json_res.location.lat, json_res.location.lng])
//     }

//     fetchIp()
// }

// const map = L.map('map-view', {
//     'center': [0,0],
//     'zoom': 0,
//     'layers': [
//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 19,
//             attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> '
//         })
//     ]
// })