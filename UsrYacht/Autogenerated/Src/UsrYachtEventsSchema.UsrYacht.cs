namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("63bb974b-30e4-4906-8ffa-0ec9a280d65f");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ce4d0510-015c-4a90-a54f-0f57857879da");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,239,107,219,48,16,253,236,64,254,135,195,159,108,8,98,253,186,108,133,37,203,74,161,108,99,118,6,163,236,131,34,95,28,21,253,48,58,57,93,22,250,191,79,150,28,83,186,14,102,176,140,238,222,189,123,239,124,134,107,164,142,11,132,26,157,227,100,247,158,173,173,217,203,182,119,220,75,107,230,179,243,124,150,245,36,77,11,213,137,60,234,229,124,54,69,158,23,105,109,205,191,114,14,217,198,120,233,37,210,127,64,216,230,136,198,143,200,251,24,61,197,208,157,12,2,12,186,162,18,7,212,252,115,16,15,239,33,223,146,251,193,197,193,231,229,207,88,210,245,59,37,5,8,197,137,32,102,94,225,128,183,176,226,132,175,100,34,199,57,158,23,42,123,12,74,101,131,112,180,178,129,47,166,226,199,160,191,176,187,7,20,30,8,77,131,110,1,137,107,133,251,96,38,50,126,112,45,1,150,137,106,100,204,118,161,43,155,40,46,181,88,46,199,124,98,129,211,160,59,184,43,210,189,76,192,11,168,65,33,53,87,208,57,41,134,25,68,52,187,65,95,159,58,108,214,86,245,218,124,231,170,199,119,35,242,186,24,198,244,117,128,231,83,43,185,135,34,49,92,195,213,155,248,148,49,113,142,103,134,236,150,214,220,8,84,216,132,38,222,245,184,76,25,242,110,248,129,97,121,136,183,88,163,238,20,247,131,16,131,143,112,103,5,87,242,55,223,41,172,34,174,72,242,182,132,46,44,151,9,51,11,155,197,190,33,217,222,137,128,177,46,144,44,70,81,89,54,253,208,180,7,249,2,242,191,40,137,69,123,183,84,91,187,146,109,186,229,37,171,237,216,114,50,249,66,107,208,152,2,236,147,117,154,251,226,133,135,208,236,10,194,32,226,187,173,62,198,105,13,52,254,224,236,99,244,183,249,37,176,27,44,92,106,71,200,83,234,152,62,241,124,250,3,38,245,141,14,96,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("a108199e-8875-5945-d268-77f9f8e0003d"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("ce4d0510-015c-4a90-a54f-0f57857879da"),
				CreatedInSchemaUId = new Guid("63bb974b-30e4-4906-8ffa-0ec9a280d65f"),
				ModifiedInSchemaUId = new Guid("63bb974b-30e4-4906-8ffa-0ec9a280d65f")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("63bb974b-30e4-4906-8ffa-0ec9a280d65f"));
		}

		#endregion

	}

	#endregion

}

