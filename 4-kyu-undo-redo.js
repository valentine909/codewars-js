// https://www.codewars.com/kata/531489f2bb244a5b9f00077e/

function undoRedo(object) {
    const undo = []
    const redo = []
    const keys = object
    return {
        set: function (key, value) {
            this.createUndoRedoInfo(key, value)
            this.innerSet(key, value)
            redo.splice(0, redo.length)
        },
        innerSet: function (key, value) {
            keys[key] = value
        },
        createUndoRedoInfo: function (key, value) {
            let oldValue = keys.hasOwnProperty(key) ? keys[key] : null
            undo.push({
                'key': key,
                'new': value,
                'old': oldValue
            })
        },
        get: function (key) {
            return keys[key]
        },
        del: function (key) {
            this.createUndoRedoInfo(key, null)
            this.innerDel(key)
            redo.splice(0, redo.length)
        },
        innerDel: function (key) {
            delete keys[key]
        },
        undo: function () {
            if (undo.length === 0) throw new Error("Nothing to undo!")
            let info = undo.pop()
            if (info.old === null) this.innerDel(info.key)
            else this.innerSet(info.key, info.old)
            redo.push(info)
        },
        redo: function () {
            if (redo.length === 0) throw new Error("Nothing to redo!")
            let info = redo.pop()
            if (info.new === null) this.innerDel(info.key)
            else this.innerSet(info.key, info.new)
            undo.push(info)
        }
    };
}
