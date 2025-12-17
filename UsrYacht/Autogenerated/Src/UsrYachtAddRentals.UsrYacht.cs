namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrYachtAddRentalsMethodsWrapper

	/// <exclude/>
	public class UsrYachtAddRentalsMethodsWrapper : ProcessModel
	{

		public UsrYachtAddRentalsMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			DateTime now = DateTime.Now;
			
			DateTime date1 = now.AddDays(7);
			DateTime date2 = date1.AddDays(1);
			DateTime date3 = date2.AddDays(1);
			
			Set<DateTime>("Date1", date1);
			Set<DateTime>("Date2", date2);
			Set<DateTime>("Date3", date3);
			return true;
		}

		#endregion

	}

	#endregion

}

