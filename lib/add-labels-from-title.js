module.exports = async (context) => {
  var title_re = /\[[a-zA-Z _-]+\]/g
  var title = context.payload.issue.title
  var matches = title.match(title_re) || []


  if (matches.length > 0) {
    var label_re = /[\[\]]/g
    var labels = matches.map(m => m.replace(label_re,''))

    const issue_labels = context.issue({ labels })
    context.github.issues.addLabels(issue_labels)

    cleansed_title = title.replace(title_re, '')
    const issue_title = context.issue({ title: cleansed_title })
    context.github.issues.update(issue_title)
  }

}

