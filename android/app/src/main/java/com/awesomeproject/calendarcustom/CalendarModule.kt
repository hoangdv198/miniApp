package com.awesomeproject.calendarcustom // replace com.your-app-name with your app’s name
import android.util.Log
import com.facebook.react.bridge.*

class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    // add to CalendarModule.kt
    override fun getName() = "CalendarModule"

    @ReactMethod fun createCalendarEvent(name: String, location: String,callback:Callback) {
        Log.d("CalendarModule", "Create event called with name: $name and location: $location")
        val eventId = "123"
        callback.invoke(null, eventId)
    }
//    to a native method to mark it as a synchronous method.
//    @ReactMethod(isBlockingSynchronousMethod = true)

    override fun getConstants(): MutableMap<String, Any> =
        hashMapOf("DEFAULT_EVENT_NAME" to "New Event")
}