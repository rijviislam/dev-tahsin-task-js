
function main() {
    const frontend = document.getElementById('frontend');
    const modalContainer = document.getElementById('modalContainer');
    const modalContainer2 = document.getElementById('modalContainer2');
    const backend = document.getElementById('backend');
    const gitnadgithub = document.getElementById('gitnadgithub');
    const modalContainer3 = document.getElementById('modalContainer3');
    // const close = document.getElementById('close');

    frontend.addEventListener('click', function () {
        modalContainer.classList.add("show");
        modalContainer2.classList.remove('show1');
        modalContainer3.classList.remove('show3');

    });
    backend.addEventListener('click', function () {
        modalContainer2.classList.add('show1');
        modalContainer.classList.remove('show');
        modalContainer3.classList.remove('show3');
    });
    gitnadgithub.addEventListener('click', function () {
        modalContainer.classList.remove('show');
        modalContainer2.classList.remove('show1');
        modalContainer3.classList.add('show3');
    });

}
main();