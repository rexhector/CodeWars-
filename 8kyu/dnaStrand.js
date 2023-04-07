function DNAStrand(dna){
  let strand = { 
    "A": "T",
    "T": "A", // this was a doozie , definitely needed help figuring this out 
    "G": "C",
    "C": "G"
  }
  return dna.replace(/A|T|G|C/g, function(matched){
    return strand[matched];
  });
}