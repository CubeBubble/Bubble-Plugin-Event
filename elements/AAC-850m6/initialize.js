function(instance, context) {

    window.addEventListener('bubbleEvent', function(event) {
        instance.publishState('name', window.bubbleEvent.name)
        instance.publishState('dataString', window.bubbleEvent.data.string)
        instance.publishState('dataArray', window.bubbleEvent.data.array)
        instance.triggerEvent('append')
    })
    
}