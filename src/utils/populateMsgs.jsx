export default function populateMsgs(name) {
    let returnList = [20]
    for (let i = 0; i < 20; i++) {
      let id = (((i + 10) % 30) + 1) + '.' + (((i + 2) % 12) + 1) + '.2022'
      returnList[i] = 
      {
        authorName: name,
        text: 'Hello my name is ' + name,
        pubDate: id,
        flagged: false
      }
    }
    return returnList;
}