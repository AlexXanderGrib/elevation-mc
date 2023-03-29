module.exports = function(appApi) {
  async function getGroupData() {
    const [group] = await appApi.api.groups.getById({
      group_ids: 'elevation_mine'
    })

    return {
      id: group.id,
      name: group.name,
      photo: group.photo_100,
      photo2x: group.photo_200
    }
  }
  return function(req, res) {
    getGroupData().then((data) => res.json(data))
  }
}
