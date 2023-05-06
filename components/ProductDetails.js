app.component("product-details", {
	props: {
		details: {
			type: array,
			required: true,
		},
	},
	template:
		/*html*/
		`<div>
    {{details[0]}}
  </div>`,
	
});
