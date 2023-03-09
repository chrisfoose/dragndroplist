const draggables = document.querySelectorAll('.draggable')
const containers  =  document.querySelectorAll('.container')

draggables.forEach(draggables => {
    draggables.addEventListener('dragstart', () => {
        console.log('drag start')
    })
})