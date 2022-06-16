function showinfo(){
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    let developerOption = document.querySelectorAll("input[name='developer-options']:checked")
    let optionsValue = []
    developerOption.forEach(element => { optionsValue.push(element.value )});
    let optionsChecked = optionsValue.join(", ")
    alert("Nome " + name + "\nCor Primária: " + favoriteColor + "\nGosta de promamar? " + likeProgramming + 
       "\nConhecimento em programação Web\n" + optionsChecked)
}