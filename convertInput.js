var tabButtons = document.querySelectorAll('.buttonContainer button')
var tabPanels = document.querySelectorAll('.tabPanel')

function showPanel(panelIndex, colorCode)
{
    tabButtons.forEach(function(node) {
        node.style.backgroundColor = ''
        node.style.color = ''
    })
    tabButtons[panelIndex].style.backgroundColor = colorCode
    tabButtons[panelIndex].style.color = 'white'
    tabPanels.forEach(function(node) {
        node.style.display = 'none'
    })
    tabPanels[panelIndex].style.display = 'block'
    tabPanels[panelIndex].style.backgroundColor = colorCode
}
showPanel(0, '#FF6347')

document.getElementById('BTN-editorInput-run').onclick = function()
{
    const html = document.getElementById('main-html')

    html.innerHTML = document.getElementById('editorInput-html').value

    var css = document.createElement('style')
    css.innerHTML = document.getElementById('editorInput-css').value
    html.appendChild(css)
    

    var script = document.createElement('script')
    script.innerHTML = document.getElementById('editorInput-js').value
    html.appendChild(script)
}

document.getElementById('BTN-editorInput-save').onclick = function()
{
    localStorage.setItem('html', document.getElementById('editorInput-html').value)
    localStorage.setItem('js', document.getElementById('editorInput-js').value)
    localStorage.setItem('css', document.getElementById('editorInput-css').value)
}
document.getElementById('BTN-editorInput-load').onclick = function()
{
    document.getElementById('editorInput-html').value = localStorage.getItem('html')
    document.getElementById('editorInput-js').value = localStorage.getItem('js')
    document.getElementById('editorInput-css').value = localStorage.getItem('css')
}