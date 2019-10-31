module.exports = async (context) => {
  var titleRe = /\[[a-zA-Z _-]+\]/g
  var title = context.payload.issue.title
  var matches = title.match(titleRe) || []

  if (matches.length > 0) {
    var labelRe = /[[\]]/g
    var labels = matches.map(m => m.replace(labelRe, ''))

    const issueLabels = context.issue({ labels })
    context.github.issues.addLabels(issueLabels)

    var cleansedTitle = title.replace(titleRe, '')
    const issueTitle = context.issue({ title: cleansedTitle })
    context.github.issues.update(issueTitle)
  }
}
