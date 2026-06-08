const renderDialog = () => {
    /*
    * data: {
    *   id: number,
    *   name: string ...
    * }
    *
    * isEdit: bool
    * */

    const div = document.createElement('div')

    div.className = 'popup-overlay'

    div.innerHTML = `
        <label for="popup-toggle" class="popup-backdrop"></label>

        <div class="panel popup-content">
            <div class="panel-header" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="panel-title">Customer Details</h2>
            </div>

            <div class="popup-body">
                <div class="form-grid">

                    <div class="form-group full-width">
                        <label class="form-label">Company Name *</label>
                        <input type="text" class="form-input" placeholder="e.g. Cty TNHH F8">
                    </div>


                    <div class="form-group">
                        <label class="form-label">Email Address</label>
                        <input type="email" class="form-input" placeholder="contact@example.com">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Phone Number</label>
                        <input type="tel" class="form-input" placeholder="0987 654 321">
                    </div>


                    <div class="form-group full-width">
                        <label class="form-label">Tax ID (Mã số thuế)</label>
                        <input type="text" class="form-input" placeholder="018381123412">
                    </div>


                    <div class="form-group full-width">
                        <label class="form-label">Physical Address</label>
                        <input type="text" class="form-input" placeholder="Enter full address...">
                    </div>
                </div>
            </div>

            <div class="popup-footer">

                <label for="popup-toggle" class="btn btn-cancel">Cancel</label>
                <button type="button" class="btn btn-save">Save Customer</button>
            </div>
        </div>
    `

    return div
}

export {
    renderDialog
}