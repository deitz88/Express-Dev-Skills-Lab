const skills = [
    {id: 125223, skill: 'HTML', hasSkill: true},
    {id: 127904, skill: 'CSS', hasSkill: true},
    {id: 139608, skill: 'Javascript', hasSkill: true},
    {id: 149108, skill: 'Express Module', hasSkill: true},
    {id: 129633, skill: 'Java', hasSkill: false},
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  	
function deleteOne(id) {
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}
  function getAll() {
    return skills;
  }
  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.hasSkill = false;
    skills.push(skill);
  }