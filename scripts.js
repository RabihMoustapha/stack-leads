const input_btn = document.getElementById("input-btn")
const input_el = document.getElementById("input-el")
const ul_el = document.getElementById("ul-el")
let my_leads = []
const delete_btn = document.getElementById("delete-btn")
const leads_from_local_storage = JSON.parse(localStorage.getItem("myLeads"))
const tab_btn = document.getElementById("tab-btn")

if (leads_from_local_storage) {
    my_leads = leads_from_local_storage
    render(my_leads)
}

input_btn.addEventListener("click", function () {
    my_leads.push(input_el.value)

    // Local Storage
    localStorage.setItem("myLeads", JSON.stringify(my_leads))

    // In JavaScript: ul_el.innerHTML += "<li><a href='" + input_el.value + "' target = '_blank'>" + input_el.value + "</a></li>"

    // Template String
    render(my_leads)

    // Clear the input field after saving the value
    input_el.value = ""
})

function render(leads) {
    let list_items = ""
    for (let i = 0; i < leads.length; i++) {
        list_items += `<li>
            <a href='#${leads[i]}' target = '_blank'>
                ${leads[i]}
            </a>
        </li>`
    }
    ul_el.innerHTML = list_items
}

delete_btn.addEventListener("click", function () {
    localStorage.clear()
    my_leads = []
    render(my_leads)
})

tab_btn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    my_leads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(my_leads))
    render(my_leads)
    })
})