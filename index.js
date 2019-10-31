const commands = require('probot-commands')
const commentThankYou = require('./lib/comment-thank-you.js')
const addLabelsFromCmd = require('./lib/add-labels-from-cmd.js')
const addLabelsFromTitle = require('./lib/add-labels-from-title.js')
const logEvent = require('./lib/log-event.js')

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  commands(app, 'label', addLabelsFromCmd)

  app.on('issues.opened', commentThankYou)
  app.on('issues.opened', addLabelsFromTitle)

  app.on('*', logEvent)
}

