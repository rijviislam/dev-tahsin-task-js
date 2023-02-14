
function main() {
    const frontend = document.getElementById('frontend');
    const modalContainer = document.getElementById('modalContainer');
    const modalContainer2 = document.getElementById('modalContainer2');
    const backend = document.getElementById('backend');
    // const close = document.getElementById('close');

    frontend.addEventListener('click', function () {
        modalContainer.classList.add("show");
    });
    backend.addEventListener('click', function () {
        modalContainer2.classList.add('show1');
        // modalContainer.classList.remove('show');
    })

    console.log(backend);
}
main();