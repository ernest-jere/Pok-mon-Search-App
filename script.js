document.getElementById("search-button").addEventListener("click", () => {
  clearItems();
  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${document.getElementById("search-input").value.toLowerCase()}`)
  .then(response => response.json())
  .then((data) => { 
    document.getElementById("pokemon-name").innerText = data.name.toUpperCase();
    document.getElementById("pokemon-id"). innerText = "#" + data.id;
    document.getElementById("weight").innerText = "Weight: " + data.weight;
    document.getElementById("height").innerText = "Height: " + data.height;
    data.types.forEach(({ type }) => {
      const span = document.createElement("span");
      span.textContent = type.name.toUpperCase();
      document.getElementById("types").appendChild(span);
    });
    document.getElementById("hp").innerText = data.stats[0].base_stat;
    document.getElementById("attack").innerText = data.stats[1].base_stat;
    document.getElementById("defense").innerText = data.stats[2].base_stat;
    document.getElementById("special-attack").innerText = data.stats[3].base_stat;
    document.getElementById("special-defense").innerText = data.stats[4].base_stat;
    document.getElementById("speed").innerText = data.stats[5].base_stat;  
    document.getElementById("main").insertAdjacentHTML("beforeend", `<img id="sprite" src="${data.sprites.front_default}">`);   
    }).catch(error => {
    console.error("Error: ", error);
    alert("Pokémon not found");
  }); 
});

const clearItems = () => {
  console.clear();
  document.getElementById("pokemon-name").innerText = "";
    document.getElementById("pokemon-id"). innerText = "";
    document.getElementById("weight").innerText = "";
    document.getElementById("height").innerText = "";
    document.getElementById("types").innerText = "";
    document.getElementById("hp").innerText = "";
    document.getElementById("attack").innerText = "";
    document.getElementById("defense").innerText = "";
    document.getElementById("special-attack").innerText = "";
    document.getElementById("special-defense").innerText = "";
    document.getElementById("speed").innerText = "";  
    const child = document.getElementById("sprite");
    const parent =document.getElementById("main");
    if (parent.contains(child)) {
    parent.removeChild(child);
}
}; 