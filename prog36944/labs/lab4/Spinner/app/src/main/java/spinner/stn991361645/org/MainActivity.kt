package spinner.stn991361645.org

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ArrayAdapter
import android.widget.Spinner
import android.widget.AdapterView
import android.widget.TextView
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val personNames = arrayOf("Anna", "George", "Alex",
            "Chris", "Richard", "Vlad", "Willy")

        val arrayAdapter = ArrayAdapter (this,
            android.R.layout.simple_spinner_item, personNames)

        val s: Spinner = findViewById(R.id.spinner)
        s.adapter = arrayAdapter

        s.onItemSelectedListener = object :
            AdapterView.OnItemSelectedListener {

            override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                spinnerResult.text = personNames[position]
            }

            override fun onNothingSelected(parent: AdapterView<*>?) {

            }

        }

        arrayAdapter.setDropDownViewResource (android.R.layout.simple_spinner_dropdown_item)

    }
}