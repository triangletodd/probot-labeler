module.exports = (context, command) => {
  const labels = command.arguments.split(/, */)

  context.github.issues.addLabels(context.issue({ labels }))
}

