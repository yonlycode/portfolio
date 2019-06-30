package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	skillCollection = "skills"
)

//FindAllSkills return all skills
func (m *DbAccess) FindAllSkills() ([]models.SkillModel, error) {
	var skills []models.SkillModel
	err := db.C(skillCollection).Find(bson.M{}).Sort("-created").All(&skills)
	return skills, err
}

//FindLastSkills return last skills
func (m *DbAccess) FindLastSkills() ([]models.SkillModel, error) {
	var skills []models.SkillModel
	err := db.C(skillCollection).Find(bson.M{"firepost": true}).Sort("-created").Limit(15).All(&skills)
	return skills, err
}

//FindSkillByID return name
func (m *DbAccess) FindSkillByID(id string) (models.SkillModel, error) {
	var skill models.SkillModel
	err := db.C(skillCollection).Find(bson.M{"_id": bson.ObjectIdHex(id)}).One(&skill)
	return skill, err
}

//FindSkillsByName return name
func (m *DbAccess) FindSkillsByName(name string) ([]models.SkillModel, error) {
	var skills []models.SkillModel
	err := db.C(skillCollection).Find(bson.M{"name": name}).All(&skills)
	return skills, err
}

//InsertSkill create new skill
func (m *DbAccess) InsertSkill(skill models.SkillModel) error {
	err := db.C(skillCollection).Insert(&skill)
	return err
}

//DeleteSkill delete skill
func (m *DbAccess) DeleteSkill(id string) error {
	err := db.C(skillCollection).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdateSkill update skill
func (m *DbAccess) UpdateSkill(skill models.SkillModel, id string) error {
	err := db.C(skillCollection).Update(bson.M{"_id": bson.ObjectIdHex(id)}, &skill)
	return err
}
