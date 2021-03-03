package project.stn991361645.menudemo

import android.app.Dialog
import android.content.DialogInterface
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.app.AlertDialog
import android.os.Bundle
import android.widget.Button
import android.view.Menu
import android.view.MenuItem
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    lateinit var output: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        output = findViewById<TextView>(R.id.textview)

        val myDialogbutton = findViewById<Button>(R.id.myDialogbutton)

        myDialogbutton.setOnClickListener {
            val dialogBuilder = AlertDialog.Builder(this)

            dialogBuilder.setMessage("Do you want to close this application?")
                .setCancelable(false)
                .setPositiveButton("Proceed", DialogInterface.OnClickListener{
                    dialog, id -> finish()
                })
                .setNegativeButton("Cancel", DialogInterface.OnClickListener{
                    dialog, id -> dialog.cancel()
                })

            val alert = dialogBuilder.create()
            alert.setTitle("Alert Dialog Example")
            alert.show()
        }

    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        val inflater = menuInflater
        inflater.inflate(R.menu.menu, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem) = when (item.itemId) {
        R.id.action_search -> {
            output.text="search..."
            msgShow("Search")
            true
        }
        R.id.action_profile -> {
            output.text = "profile..."
            msgShow("Profile")
            true
        }
        R.id.action_setting -> {
            output.text = "settings..."
            msgShow("Setting")
            true
        }
        else -> {
            super.onOptionsItemSelected(item)
        }
    }

    fun msgShow(msg: String) {
        Toast.makeText(this, msg, Toast.LENGTH_LONG).show()
    }
}