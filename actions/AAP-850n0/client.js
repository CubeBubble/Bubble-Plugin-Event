function(properties, context) {

  	window.bubbleEvent.name = properties.name
    window.bubbleEvent.data.string = properties.dataString
    window.bubbleEvent.data.array = properties.dataArray ? properties.dataArray.get(0, properties.dataArray.length()) : []
  	window.dispatchEvent(window.bubbleEvent.event)

}