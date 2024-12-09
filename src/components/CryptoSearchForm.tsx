export const CryptoSearchForm = () => {
  return (
    <form>
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select name="currency" id="currency">
                <option value="">--Seleccioná</option>
            </select>
        </div>

        <div className="field">
            <label htmlFor="cryptocurrency">Criptomoneda:</label>
            <select name="cryptocurrency" id="cryptocurrency">
                <option value="">--Seleccioná</option>
            </select>
        </div>

        <input type="submit" value="Cotizar" />
    </form>
  )
};