module.exports = async (context) => {
  const issueComment = context.issue({ body: 'Thanks for opening this issue!' })

  context.github.issues.createComment(issueComment)
}
