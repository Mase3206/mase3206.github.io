# noahroberts.github.io

## The `include` tag

If you take a peek at the source code, you'll see me use an `<include>` tag. This is *not* part of the HTML 5 spec, but I think it should be, so I sort of hacked it together using a simple script, [scripts/include.js](scripts/include.js). Here's what it does:
- searches for all `<include>` tag pairs in the document that called it
- gets the value stored in the `component` key
- replaces the `<include>` tag pair with the HTML source from the given component's HTML file