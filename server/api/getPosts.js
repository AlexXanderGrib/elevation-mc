module.exports = async function(vk) {
  const data = await vk.api.wall.get({
    domain: 'elevation_mine', // 'elevation_mine',
    count: 7,
    filter: 'owner'
  })

  return data.items.map((post) => {
    const images = []

    for (const attachment of post.attachments) {
      if (attachment.type === 'photo') {
        let maxSizeUrl = ''
        let maxSize = 0

        for (const size of attachment.photo.sizes) {
          const sizeSum = size.width + size.height

          if (sizeSum > maxSize) {
            maxSize = sizeSum
            maxSizeUrl = size.url
          }
        }

        images.push(maxSizeUrl)
      }
    }

    return {
      text: post.text,
      images,
      date: post.date,
      postId: `wall${post.owner_id}_${post.id}`
    }
  })
}
