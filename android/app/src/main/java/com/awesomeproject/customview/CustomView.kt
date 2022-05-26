// replace with your package
package com.awesomeproject.customview

import android.content.Context
import android.graphics.Color
import android.widget.FrameLayout
import android.widget.TextView

class CustomView(context: Context) : FrameLayout(context) {
    init {
        // set padding and background color
        setPadding(16, 16, 16, 16)
        setBackgroundColor(Color.parseColor("#5FD3F3"))

        // add default text view
        val text = TextView(context)
        text.text = "Welcome to Android Fragments with React Native."
        this.addView(text)
    }
}