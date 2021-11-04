function imageGallery(){
    const highlight = document.querySelector(".gallery")
    const previews = document.querySelectorAll("img")

    previews.forEach(preview =>{
        preview.addEventListener('click', function(){
            console.log(this);
        })
    })
}