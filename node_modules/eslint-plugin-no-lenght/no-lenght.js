module.exports.rules = {
  'no-lenght': (context) => ({
    MemberExpression: (node) => {
      if (node.property.name === 'lenght') {
        context.report(node.property, 'Mistyped prop length found!')
      }
    }
  })
}