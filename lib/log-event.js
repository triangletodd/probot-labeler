module.exports = async (context) => {
  context.log({ event: context.event, action: context.payload.action })
}

