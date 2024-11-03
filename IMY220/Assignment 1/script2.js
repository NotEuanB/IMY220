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
      return this.pets.filter(pet => pet.age >= minAge && pet.age <= maxAge);
    }
  
    listAdoptedPetsByDate() {
      let adoptedPets = this.pets.filter(pet => pet.adopted === true);
      return adoptedPets.sort((a, b) => new Date(b.adoptedDate) - new Date(a.adoptedDate));
    }
  
    ListPets(...args) {
      let petsToList;
  
      if (args.length === 0) {
        petsToList = this;
      } else if (args.length === 1 && Array.isArray(args[0])) {
        petsToList = args[0];
      } else {
        petsToList = args;
      }
  
      function createPetItem(pet) {
        let petInfo = `${pet.name} | ${pet.species} | Age: ${pet.age}`;
        if (pet.adopted) {
          petInfo += " | Adopted!";
        }
        return petInfo;
      }
  
      return petsToList.map(createPetItem).join(',');
    }
  
    calculateUniqueAdoptionFee(...petNames) {
      const uniquePetNames = new Set(petNames);
      const uniquePets = this.pets.filter(pet => uniquePetNames.has(pet.name));
      const totalAdoptionFee = uniquePets.reduce((total, pet) => total + pet.adoptionFee, 0);
  
      return totalAdoptionFee;
    }
  }
  
  Array.prototype.findPetsInAgeRange = function (minAge, maxAge) {
    return this.filter(pet => pet.age >= minAge && pet.age <= maxAge);
  };
  
  Array.prototype.listAdoptedPetsByDate = function () {
    let adoptedPets = this.filter(pet => pet.adopted === true);
    return adoptedPets.sort((a, b) => new Date(b.adoptedDate) - new Date(a.adoptedDate));
  };
  
  Array.prototype.ListPets = function (...args) {
    let petsToList;
  
    if (args.length === 0) {
      petsToList = this;
    } else if (args.length === 1 && Array.isArray(args[0])) {
      petsToList = args[0];
    } else {
      petsToList = args;
    }
  
    function createPetItem(pet) {
      let petInfo = `${pet.name} | ${pet.species} | Age: ${pet.age}`;
      if (pet.adopted) {
        petInfo += " | Adopted!";
      }
      return petInfo;
    }
  
    return petsToList.map(createPetItem).join(',');
  };
  
  Array.prototype.calculateUniqueAdoptionFee = function (...petNames) {
    const uniquePetNames = new Set(petNames);
    const uniquePets = this.filter(pet => uniquePetNames.has(pet.name));
    const totalAdoptionFee = uniquePets.reduce((total, pet) => total + pet.adoptionFee, 0);
  
    return totalAdoptionFee;
  };