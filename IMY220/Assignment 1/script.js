var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27", adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];

class PetHandler {
  constructor(pets) {
    this.pets = pets;
  }

  findPetsInAgeRange(minAge, maxAge) {
    return pets.filter(({ age }) => age >= minAge && age <= maxAge);
  }

  listAdoptedPetsByDate() {
    return pets.filter(({ adopted }) => adopted).sort((a,b) => new Date(b.adoptedDate) - new Date(a.adoptedDate));
  }

  ListPets(...params) {
    const petString = params.length === 0 ? this.pets : params.length === 1 ? params[0] : params;
    
    const createPetItem = (pet) => {return pet.adopted 
    ? `${pet.name} | ${pet.species} | Age: ${pet.age} | Adopted!` 
    : `${pet.name} | ${pet.species} | Age: ${pet.age}`};

    return petString.map(createPetItem).join('\n');
  }

  calculateUniqueAdoptionFee(...PetNames) {
    const uniques = [...new Set(PetNames)];
    return pets
    .filter(({ name }) => uniques.includes(name))
    .reduce((total, { adoptionFee }) => total + adoptionFee, 0);
  }
}

Array.prototype.findPetsInAgeRange= function(minAge, maxAge) {
  return this.filter(({ age }) => age >= minAge && age <= maxAge);
}

Array.prototype.listAdoptedPetsByDate = function() {
  return this.filter(({ adopted }) => adopted).sort((a,b) => new Date(b.adoptedDate) - new Date(a.adoptedDate));
}

Array.prototype.ListPets = function(...params) {
  const petString = params.length === 0 ? this : params.length === 1 ? params[0] : params;
    
  const createPetItem = (pet) => {
    return pet.adopted 
    ? `${pet.name} | ${pet.species} | Age: ${pet.age} | Adopted!` 
    : `${pet.name} | ${pet.species} | Age: ${pet.age}`
  };

  return petString.map(createPetItem).join('\n');
}

Array.prototype.calculateUniqueAdoptionFee = function(...PetNames) {
  const uniques = [...new Set(PetNames)];
    return this
    .filter(({ name }) => uniques.includes(name))
    .reduce((total, { adoptionFee }) => total + adoptionFee, 0);
}