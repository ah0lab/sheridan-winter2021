package project.stN991361645.org

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
//import android.widget.Toast
import android.widget.TextView
import android.widget.Button
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val button:Button = findViewById<Button>(R.id.roll_button)
        val resultText:TextView = findViewById<TextView>(R.id.result_text)
        rollButton.setOnClickListener {rollDice()}
    }
    private fun rollDice()
    {
        val randNum = (1..6).random()
        resultText.text = randNum
        //Toast.makeText (this, "button clicked", Toast.LENGTH_SHORT).show()
    }
}