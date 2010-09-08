echo '<html><body>' > tmp.html;
echo -n '<a href="' >> tmp.html;
echo 'javascript:%20' >> tmp.html;
cat lib/app.js | ./jsmin.rb | sed 's/"/%22/g' >> tmp.html
cat lib/jquerify.js >> tmp.html;
echo -n '">Ingmar</a>' >> tmp.html;
echo '<br /><br />' >> tmp.html;
echo '<a href="http://www.filmkedjan.com/Pages/Medverkande.aspx?mednr=19403&faktatyp=Film&k=89">Filmkedjan</a>' >> tmp.html;

echo '</body></html>' >> tmp.html;
cat tmp.html | tr -d '\n' > link.html;
rm tmp.html;
