(function() {var implementors = {};
implementors['itertools'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;'a, A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='itertools/struct.Stride.html' title='itertools::Stride'>Stride</a>&lt;'a, A&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='itertools/struct.StrideMut.html' title='itertools::StrideMut'>StrideMut</a>&lt;'a, A&gt;",];implementors['chrono'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;Tz: <a class='trait' href='chrono/offset/trait.TimeZone.html' title='chrono::offset::TimeZone'>TimeZone</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='chrono/date/struct.Date.html' title='chrono::date::Date'>Date</a>&lt;Tz&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;Tz: <a class='trait' href='chrono/offset/trait.TimeZone.html' title='chrono::offset::TimeZone'>TimeZone</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='chrono/datetime/struct.DateTime.html' title='chrono::datetime::DateTime'>DateTime</a>&lt;Tz&gt;",];implementors['openssl'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='openssl/ssl/struct.SslContext.html' title='openssl::ssl::SslContext'>SslContext</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='openssl/ssl/struct.Ssl.html' title='openssl::ssl::Ssl'>Ssl</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()