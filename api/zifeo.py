from typegraph import TypeGraph, policies, t
from typegraph.runtimes.http import HTTPRuntime

with TypeGraph(
    "zifeo",
    cors=TypeGraph.Cors(allow_origin=["http://localhost:3000", "https://zifeo.com"]),
) as g:
    public = policies.public()

    brevo = HTTPRuntime("https://api.brevo.com")
    newsletterSignUp = brevo.post(
        "v3/contacts",
        t.struct(
            {
                "email": t.email(),
                "listIds": t.array(t.integer()).set([9]),
                "header#api-key": t.string().from_secret("BREVO_KEY"),
            }
        ),
        t.struct({"id": t.integer().optional()}),
    ).add_policy(public)

    g.expose(
        newsletterSignUp=newsletterSignUp,
    )
